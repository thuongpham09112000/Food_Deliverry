// models/UserModel.js
const db = require('../config/connect'); // Kết nối cơ sở dữ liệu

class UserModel {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static async save(user) {
        // Lưu người dùng vào cơ sở dữ liệu
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        const [result] = await db.execute(query, [user.username, user.email, user.password]);
        return result;
    }

    static async findByEmail(email) {
        // Tìm kiếm người dùng theo email
        const query = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await db.execute(query, [email]);
        return rows[0];
    }
}

module.exports = UserModel;
