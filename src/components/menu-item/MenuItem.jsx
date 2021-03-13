import React from "react";
import "./MenuItem.styles.scss";
const MenuItem = ({ section }) => {
    return (
        <div className={`menu-item ${section.size}`}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${section.imageUrl})`,
                }}
            ></div>
            <div className="content">
                <h1 className="title">{section.title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    );
};

export default MenuItem;
