const db = require('../connect');

// Query tạo bảng Account
const createAccountTableQuery = `
    CREATE TABLE IF NOT EXISTS Account (
        accountId INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        personalInfo VARCHAR(200),
        purchaseHistory TEXT
    )
`;

// Query tạo bảng Order
const createOrderTableQuery = `
    CREATE TABLE IF NOT EXISTS \`Order\` (
        orderId INT PRIMARY KEY AUTO_INCREMENT,
        orderDate DATE NOT NULL,
        orderStatus VARCHAR(30) NOT NULL,
        customerId INT,
        FOREIGN KEY (customerId) REFERENCES Account(accountId)
    )
`;

// Query tạo bảng MenuItem
const createMenuItemTableQuery = `
    CREATE TABLE IF NOT EXISTS MenuItem (
        itemId INT PRIMARY KEY AUTO_INCREMENT,
        itemName VARCHAR(100) NOT NULL,
        itemDescription VARCHAR(200),
        itemPrice FLOAT NOT NULL,
        itemCategory VARCHAR(50)
    )
`;

// Query tạo bảng Cart
const createCartTableQuery = `
    CREATE TABLE IF NOT EXISTS Cart (
        cartId INT PRIMARY KEY AUTO_INCREMENT,
        totalAmount FLOAT NOT NULL,
        customerId INT,
        FOREIGN KEY (customerId) REFERENCES Account(accountId)
    )
`;

// Query tạo bảng CartItems
const createCartItemsTableQuery = `
    CREATE TABLE IF NOT EXISTS CartItems (
        cartId INT,
        itemId INT,
        quantity INT NOT NULL,
        PRIMARY KEY (cartId, itemId),
        FOREIGN KEY (cartId) REFERENCES Cart(cartId),
        FOREIGN KEY (itemId) REFERENCES MenuItem(itemId)
    )
`;

// Query tạo bảng OrderItems
const createOrderItemsTableQuery = `
    CREATE TABLE IF NOT EXISTS OrderItems (
        orderId INT,
        itemId INT,
        quantity INT NOT NULL,
        PRIMARY KEY (orderId, itemId),
        FOREIGN KEY (orderId) REFERENCES \`Order\`(orderId),
        FOREIGN KEY (itemId) REFERENCES MenuItem(itemId)
    )
`;

// Query tạo bảng Payment
const createPaymentTableQuery = `
    CREATE TABLE IF NOT EXISTS Payment (
        paymentId INT PRIMARY KEY AUTO_INCREMENT,
        paymentMethod VARCHAR(30) NOT NULL,
        amount FLOAT NOT NULL,
        orderId INT,
        FOREIGN KEY (orderId) REFERENCES \`Order\`(orderId)
    )
`;

// Query tạo bảng OrderTracking
const createOrderTrackingTableQuery = `
    CREATE TABLE IF NOT EXISTS OrderTracking (
        trackingId INT PRIMARY KEY AUTO_INCREMENT,
        orderId INT,
        statusUpdate VARCHAR(200) NOT NULL,
        updateDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (orderId) REFERENCES \`Order\`(orderId)
    )
`;

// Function to execute a query
function executeQuery(query, successMessage) {
    db.query(query, (error, results, fields) => {
        if (error) {
            console.error('Lỗi khi thực thi truy vấn: ', error);
            return;
        }
        console.log(successMessage);
    });
}

// Thực thi các truy vấn để tạo bảng
executeQuery(createAccountTableQuery, 'Bảng Account đã được tạo hoặc đã tồn tại!');
executeQuery(createOrderTableQuery, 'Bảng Order đã được tạo hoặc đã tồn tại!');
executeQuery(createMenuItemTableQuery, 'Bảng MenuItem đã được tạo hoặc đã tồn tại!');
executeQuery(createCartTableQuery, 'Bảng Cart đã được tạo hoặc đã tồn tại!');
executeQuery(createCartItemsTableQuery, 'Bảng CartItems đã được tạo hoặc đã tồn tại!');
executeQuery(createOrderItemsTableQuery, 'Bảng OrderItems đã được tạo hoặc đã tồn tại!');
executeQuery(createPaymentTableQuery, 'Bảng Payment đã được tạo hoặc đã tồn tại!');
executeQuery(createOrderTrackingTableQuery, 'Bảng OrderTracking đã được tạo hoặc đã tồn tại!');

// Dữ liệu mẫu để chèn vào các bảng (ví dụ)
const insertAccountDataQuery = `
    INSERT INTO Account (username, password, email, personalInfo, purchaseHistory) VALUES
    ('user1', 'password1', 'user1@example.com', 'Info 1', 'History 1'),
    ('user2', 'password2', 'user2@example.com', 'Info 2', 'History 2'),
    ('user3', 'password3', 'user3@example.com', 'Info 3', 'History 3')
`;

const insertMenuItemDataQuery = `
    INSERT INTO MenuItem (itemName, itemDescription, itemPrice, itemCategory) VALUES
    ('Pizza', 'Delicious cheese pizza', 9.99, 'Main Course'),
    ('Burger', 'Juicy beef burger', 7.99, 'Main Course'),
    ('Coke', 'Refreshing beverage', 1.99, 'Drink')
`;

executeQuery(insertAccountDataQuery, 'Dữ liệu mẫu đã được thêm vào bảng Account!');
executeQuery(insertMenuItemDataQuery, 'Dữ liệu mẫu đã được thêm vào bảng MenuItem!');
