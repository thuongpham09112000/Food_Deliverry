const db = require('../database');

const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS Users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`;

const insertUsersDataQuery = `
    INSERT INTO Users (username, email, password) VALUES
    ('user1', 'user1@example.com', 'password1'),
    ('user2', 'user2@example.com', 'password2'),
    ('user3', 'user3@example.com', 'password3')
`;

// Kết nối đến cơ sở dữ liệu và thực thi các truy vấn
db.query(createUsersTableQuery, (error, results, fields) => {
    if (error) {
        console.error('Lỗi tạo bảng Users: ', error);
        return;
    }
    console.log('Bảng Users đã được tạo hoặc đã tồn tại!');

    db.query(insertUsersDataQuery, (error, results, fields) => {
        if (error) {
            console.error('Lỗi thêm dữ liệu vào bảng Users: ', error);
            return;
        }
        console.log('Dữ liệu mẫu đã được thêm vào bảng Users!');
    });
});
