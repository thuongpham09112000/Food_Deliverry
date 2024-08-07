import React, { useState } from 'react';
import '../styles/style-components.css';
const AuthForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLogin) {
            try {
                const data = await AuthService.login({ email, password });
                console.log('Đăng nhập thành công!', data);
                // Xử lý sau khi đăng nhập thành công, ví dụ: chuyển hướng trang
            } catch (error) {
                console.error('Lỗi đăng nhập: ', error);
                // Xử lý sau khi đăng nhập thất bại, ví dụ: hiển thị thông báo lỗi
            }
        } else {
            try {
                const data = await AuthService.register({ username, email, password });
                console.log('Đăng ký thành công!', data);
                // Xử lý sau khi đăng ký thành công, ví dụ: chuyển hướng trang
            } catch (error) {
                console.error('Lỗi đăng ký: ', error);
                // Xử lý sau khi đăng ký thất bại, ví dụ: hiển thị thông báo lỗi
            }
        }
    };


    return (
        <div>
            <h2>{isLogin ? 'Đăng nhập' : 'Đăng ký'}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <div>
                        <label>Username:</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                )}
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">{isLogin ? 'Đăng nhập' : 'Đăng ký'}</button>
            </form>
            <p onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Chưa có tài khoản? Đăng ký ngay' : 'Đã có tài khoản? Đăng nhập ngay'}
            </p>
        </div>
    );
};

export default AuthForm;
