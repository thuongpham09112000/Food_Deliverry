import React from 'react';
import '../styles/style-components.css';
const FilterSection = () => {
  return (
    <div className="main-filter">
      <div className='category'>
        <h2 className="main-title">Danh mục thực đơn</h2>
        <div className="main-arrow">
          <ion-icon className="back-menus" name="chevron-back-circle-outline"></ion-icon>
          <ion-icon className="next-menus" name="chevron-forward-circle-outline"></ion-icon>
        </div>
      </div>
      <div className="filter-wrapper">
        <div className="filter-card">
          <div className="filter-icon">
            <ion-icon name="restaurant-outline"></ion-icon>
          </div>
          <p>Tất cả</p>
        </div>
        <div className="filter-card">
          <div className="filter-icon">
            <ion-icon name="fast-food-outline"></ion-icon>
          </div>
          <p>Bánh Burger</p>
        </div>
        <div className="filter-card">
          <div className="filter-icon">
            <ion-icon name="pizza-outline"></ion-icon>
          </div>
          <p>Bánh Pizza</p>
        </div>
        <div className="filter-card">
          <div className="filter-icon">
            <ion-icon name="wine-outline"></ion-icon>
          </div>
          <p>Rượu vang</p>
        </div>
        <div className="filter-card">
          <div className="filter-icon">
            <ion-icon name="ice-cream-outline"></ion-icon>
          </div>
          <p>Kem</p>
        </div>
        <div className="filter-card">
          <div className="filter-icon">
            <ion-icon name="cafe-outline"></ion-icon>
          </div>
          <p>Cà phê</p>
        </div>
        <div className="filter-card">
          <div className="filter-icon">
            <ion-icon name="restaurant-outline"></ion-icon>
          </div>
          <p>Hải sản</p>
        </div>
        <div className="filter-card">
          <div className="filter-icon">
            <ion-icon name="fish-outline"></ion-icon>
          </div>
          <p>Đồ ăn Healthy</p>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
