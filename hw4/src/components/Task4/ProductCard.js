import React from "react";
import Tooltip from "./Tooltip";
import ProductTooltip from "./ProductTooltip";

export const ProductCard = ({ image, title, description, price, rating }) => {
  const content = { title, price, rating };

  return (
    <div className="product_card">
      <div className="product_img_container">
        <img src={image} className="product_img" alt="cover" />
      </div>
      <h3 className="product_title">{title}</h3>
      <p>{description}</p>

      <Tooltip
        renderTooltip={(position) => (
          <ProductTooltip position={position} content={content} />
        )}
      />
    </div>
  );
};
