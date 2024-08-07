const connection = require('./connect');

connection.query('SELECT 1', (err, results) => {
    if (err) {
        console.error('Lỗi kiểm tra kết nối: ', err);
        return;
    }
    console.log('Kết nối đến cơ sở dữ liệu thành công!');
});
