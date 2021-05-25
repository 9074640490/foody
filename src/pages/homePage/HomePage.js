import React from "react";
import "./homePage.css";

const HomePage = (props) => {
    return (
        <div className="homePage">
            <div className="top-header">
                <p>Foody website</p>
            </div>
            <p className="layer-title">Vegitable</p>
            <div className="first-layer">
                <div className="box">
                    <img src="https://online.ahu.edu/wp-content/uploads/2019/03/Healthy-Food-Doesnt-Have-To-Be-Expensive.jpg" />
                    <p>VEGETABLE KURUMA</p>
                </div>
                <div className="box">
                    <img src="https://static.onecms.io/wp-content/uploads/sites/35/2021/02/12/heart-healthy-foods-promo.jpg" />
                    <p>VEGETABLE STEW</p>
                </div>
                <div className="box">
                    <img src="https://philnews.ph/wp-content/uploads/2020/04/Healthy-Foods-Healthy-Skin.jpg" />
                    <p>VEGETABLE DHAL</p>
                </div>

            </div>

            <p className="layer-title">Chicken</p>
            <div className="first-layer">
                <div className="box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Spatchcocking.jpg" />
                    <p>SHAWAI</p>
                </div>
                <div className="box">
                    <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2018/12/tandoori-chicken-500x375.jpg" />
                    <p>TANDOORI CHICKEN</p>
                </div>
                <div className="box">
                    <img src="https://www.hungryforever.com/wp-content/uploads/2016/02/Chicken-Dishes-1280x720.jpg" />
                    <p>CHICKEN FRY</p>
                </div>
            </div>

        </div>
    );
};

export default HomePage;


