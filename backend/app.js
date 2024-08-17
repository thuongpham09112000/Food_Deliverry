const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware để parse JSON
app.use(bodyParser.json());

// Cấu hình CORS
app.use(cors());

// Route cho trang chủ
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

// Sử dụng routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
