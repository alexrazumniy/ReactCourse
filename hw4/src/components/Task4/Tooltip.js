import React, { useState } from "react";
import ProductTooltip from "./ProductTooltip";
import ProductCardList from "./ProductCardList";

const Tooltip = ({ renderTooltip, content }) => {
  const [position, setPosition] = useState({ tooltipX: 0, tooltipY: 0 });
  const [isTooltipShown, setIsTooltipShown] = useState(false);

  const { title, price, rating } = content;

  const toggleTooltip = () => {
    setIsTooltipShown((prev) => !prev);
  };

  const handleMouseEnter = (event) => {
    setIsTooltipShown(!isTooltipShown);
    console.log(!isTooltipShown);
  };

  const handleMouseLeave = (event) => {
    setIsTooltipShown(isTooltipShown);
    console.log(isTooltipShown);
  };

  const handleMouseMove = (event) => {
    setPosition({ tooltipX: event.clientX, tooltipY: event.clientY });
  };

  return (
    <div
      className="tooltip"
      style={{ left: position.tooltipX, top: position.tooltipY }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <h4 className="tooltip_title">{title}</h4>
      <p className="tooltip_option">{`Price: ${price} $`}</p>
      <p className="tooltip_option">
        {`Rating: ${rating.rate}`} {`Count: ${rating.count}`}
      </p>
      {renderTooltip(position, content)}
    </div>
  );
};

export default Tooltip;
