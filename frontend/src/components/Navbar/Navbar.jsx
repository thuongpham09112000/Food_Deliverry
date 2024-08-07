import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main-navbar">
      <ion-icon className="menu-toggle" name="menu-outline"></ion-icon>
      <div className="search">
        <input type="text" placeholder="Bạn muốn ăn gì?" />
        <button className="search-btn">Tìm kiếm</button>
      </div>
      <div className="profile">
        {/* <a href="#" className="cart">
          <ion-icon name="cart-outline"></ion-icon>
        </a> */}

        <div className="user">
          <ion-icon name="person-outline"></ion-icon>
          <label> Tài khoản</label>
          <div className="profile-dropdown">
            <p>Tên người dùng</p>
            <a href="#">Thông tin cá nhân</a>
            <a href="#">Lịch sử mua hàng</a>
            <a href="#">Đăng xuất</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
