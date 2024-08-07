import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="logo">FoodTime</h1>
      <div className="sidebar-menus">
        <a href="#">
          <ion-icon name="storefront-outline"></ion-icon>Menu món
        </a>
        <a href="#">
          <ion-icon name="wallet-outline"></ion-icon>Giỏ hàng
        </a>
        <a href="#">
          <ion-icon name="chatbubbles-outline"></ion-icon>Liên hệ
        </a>
      </div>
      <div className="sidebar-logout">
        <a href="#">
          <ion-icon name="log-out-outline"></ion-icon>Đăng xuất
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
