// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: 'mydb.cfe8g86owgft.ap-south-1.rds.amazonaws.com',
//     user: 'admin',
//     password: 'gicungduoc',
//     database: 'mydb',
//     port: '3000',
//     timeout: 60000000
// });

// connection.connect((err) => {
//     if (err) {
//         console.error('Lỗi kết nối: ', err);
//         return;
//     }
//     console.log('Kết nối đến MySQL trên Amazon RDS thành công!');
// });

// module.exports = connection;

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'DB_DeliveryFood',
    port: '3306',
    connectTimeout: 30000
});

connection.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối: ', err);
        return;
    }
    console.log('Kết nối đến MySQL thành công!');
});

module.exports = connection;
