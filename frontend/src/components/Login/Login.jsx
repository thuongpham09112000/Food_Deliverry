import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      // Xử lý đăng ký
      console.log(
        "Đăng ký với email:",
        email,
        "và mật khẩu:",
        password,
        "và tên:",
        name
      );
      // Sau khi đăng ký thành công, điều hướng đến trang đăng nhập
      navigate("/login");
    } else {
      // Xử lý đăng nhập
      console.log("Đăng nhập với email:", email, "và mật khẩu:", password);
      // Sau khi đăng nhập thành công, điều hướng đến trang chính
      navigate("/home");
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? "Đăng Ký" : "Đăng Nhập"}</h2>
      <form onSubmit={handleSubmit}>
        {isRegistering && (
          <div className="form-group">
            <label htmlFor="name">Tên:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập tên của bạn"
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập email của bạn"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu của bạn"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">
          {isRegistering ? "Đăng Ký" : "Đăng Nhập"}
        </button>
      </form>
      <button
        className="toggle-button"
        onClick={() => setIsRegistering(!isRegistering)}
      >
        {isRegistering
          ? "Đã có tài khoản? Đăng Nhập"
          : "Chưa có tài khoản? Đăng Ký"}
      </button>
    </div>
  );
};

export default Login;
