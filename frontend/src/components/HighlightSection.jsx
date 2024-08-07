import React from 'react';
import '../styles/style-components.css';
import saladImage from '../images/salad.jpg';
import coffeeImage from '../images/coffee.jpg';
import steakImage from '../images/steak.jpg';
import burgerImage from '../images/burger.jpg';

const HighlightSection = () => {
  return (
    <div className="main-highlight">
      <div className="main-header">
        <h2 className="main-title">Món ăn được đề xuất</h2>
        <div className="main-arrow">
          <ion-icon className="back" name="chevron-back-circle-outline"></ion-icon>
          <ion-icon className="next" name="chevron-forward-circle-outline"></ion-icon>
        </div>
      </div>
      <div className="highlight-wrapper">
        <div className="highlight-card">
          <img className="highlight-img" src={saladImage} alt="Salad" />
          <div className="highlight-desc">
            <h4>Salad</h4>
            <p>60.000đ</p>
          </div>
        </div>
        <div className="highlight-card">
          <img className="highlight-img" src={coffeeImage} alt="Coffee" />
          <div className="highlight-desc">
            <h4>Coffee</h4>
            <p>50.000đ</p>
          </div>
        </div>
        <div className="highlight-card">
          <img className="highlight-img" src={steakImage} alt="Steak" />
          <div className="highlight-desc">
            <h4>Premium Steak</h4>
            <p>250.000đ</p>
          </div>
        </div>
        <div className="highlight-card">
          <img className="highlight-img" src={burgerImage} alt="Burger" />
          <div className="highlight-desc">
            <h4>Big Burger</h4>
            <p>100.000đ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
