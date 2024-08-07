import React from "react";
import "../styles/style-components.css";
import seafoodImage from "../images/seafood.jpg";
import pizzaImage from "../images/pizza.jpg";
import wineImage from "../images/wine.jpg";
import burgerImage from "../images/burger.jpg";
import coffeeImage from "../images/coffee.jpg";
import saladImage from "../images/salad.jpg";

const FoodDetail = () => {
  return (
    <div className="main-detail">
      <h2 className="main-title">Chọn món</h2>
      <div className="detail-wrapper">
        <div className="detail-card">
          <img className="detail-img" src={seafoodImage} alt="Seafood" />
          <div className="detail-desc">
            <div className="detail-name">
              <h4>Shrimp Soup</h4>
              <p className="detail-sub">
                Lorem ipsum dolor sit amet consectetur provident doloremque
                minima
              </p>
              <p className="price">152.000đ</p>
            </div>
            <ion-icon
              className="detail-favorites"
              name="bookmark-outline"
            ></ion-icon>
          </div>
        </div>
        <div className="detail-card">
          <img className="detail-img" src={pizzaImage} alt="Pizza" />
          <div className="detail-desc">
            <div className="detail-name">
              <h4>Pizza</h4>
              <p className="detail-sub">
                Lorem ipsum dolor sit amet consectetur provident doloremque
                minima
              </p>
              <p className="price">252.000đ</p>
            </div>
            <ion-icon
              className="detail-favorites"
              name="bookmark-outline"
            ></ion-icon>
          </div>
        </div>
        <div className="detail-card">
          <img className="detail-img" src={wineImage} alt="Wine" />
          <div className="detail-desc">
            <div className="detail-name">
              <h4>Rượu vang</h4>
              <p className="detail-sub">
                Illum officia porro amet consectetur adipisicing facilis eum
                eveniet
              </p>
              <p className="price">1.352.000đ</p>
            </div>
            <ion-icon
              className="detail-favorites"
              name="bookmark-outline"
            ></ion-icon>
          </div>
        </div>
        <div class="detail-card">
          <img class="detail-img" src={burgerImage} />
          <div class="detail-desc">
            <div class="detail-name">
              <h4>Big Burger thịt bò</h4>
              <p class="detail-sub">
                Temporibus at praesentium nisi cumque consectetur dolorem
              </p>
              <p class="price">235.00đ</p>
            </div>
            <ion-icon
              class="detail-favorites"
              name="bookmark-outline"
            ></ion-icon>
          </div>
        </div>
        <div class="detail-card">
          <img class="detail-img" src={coffeeImage} />
          <div class="detail-desc">
            <div class="detail-name">
              <h4>Cafe Latte</h4>
              <p class="detail-sub">
                Minus ipsa fugiat non at expedita incidunt provident doloremque
                architecto
              </p>
              <p class="price">40.00đ</p>
            </div>
            <ion-icon
              class="detail-favorites"
              name="bookmark-outline"
            ></ion-icon>
          </div>
        </div>
        <div class="detail-card">
          <img class="detail-img" src={saladImage} />
          <div class="detail-desc">
            <div class="detail-name">
              <h4>Salad Da Cá Hồi</h4>
              <p class="detail-sub">
                Corporis accusamus harum alias hic labore officiis natus
              </p>
              <p class="price">45.000đ</p>
            </div>
            <ion-icon
              class="detail-favorites"
              name="bookmark-outline"
            ></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
