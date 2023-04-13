import React from "react";
import Tooltip from "./Tooltip";

export const ProductCard = ({ image, title, description, price, rating }) => {
  return (
    <div className="product_card">
      <div className="product_img_container">
      <Tooltip
        content={
          <div>
            <h4 className="tooltip_title">{title}</h4>
            <p className="tooltip_option">{`Price: ${price} $`}</p>
            <p className="tooltip_option">{`Rating: ${rating.rate}`}</p>
          </div>
        }
        renderTooltip={(toggleTooltip, handleMouseMove) => (
          <img className="product_img" src={image} alt="cover"
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
            onMouseMove={handleMouseMove}
          />
        )}
      />
      </div>
      <h3 className="product_title">{title}</h3>
      <p className="product_description">{description}</p>      
    </div>
  );
};
