const API_URL = 'http://localhost:5000'; // URL của backend API

const AuthService = {
    login: async ({ email, password }) => {
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            // Xử lý dữ liệu trả về từ API
            return data;
        } catch (error) {
            console.error('Lỗi khi đăng nhập: ', error);
        }
    },
    register: async ({ username, email, password }) => {
        try {
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });
            const data = await response.json();
            // Xử lý dữ liệu trả về từ API
            return data;
        } catch (error) {
            console.error('Lỗi khi đăng ký: ', error);
        }
    },
};

export default AuthService;
