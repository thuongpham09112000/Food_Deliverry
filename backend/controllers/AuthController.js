const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel');

// Đăng ký người dùng
exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Hash mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        // Tạo một đối tượng User từ UserModel
        const user = new UserModel(username, email, hashedPassword);

        // Lưu user vào cơ sở dữ liệu (chưa implement)

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Đăng nhập
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Tìm kiếm người dùng theo email (chưa implement)

        // Mock user data
        const user = {
            id: 1,
            username: 'exampleUser',
            email: 'example@example.com',
            password: '$2b$10$0LJdEmH06ZqNdxm9W5ORUubQ15mZps95A5MZn5X2EjP6TKgVLy3Gu' // hashed password
        };

        // So sánh mật khẩu
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Email or password is incorrect' });
        }

        // Tạo token JWT
        const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '1h' });
        return res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Đăng xuất
exports.logout = (req, res) => {
    // Có thể cần xử lý hủy phiên đăng nhập tại đây
    return res.status(200).json({ message: 'Logout successful' });
};
