import React, { useState } from "react";
import ProductTooltip from "./ProductTooltip";

const Tooltip = ({ renderTooltip, content }) => {
  const [position, setPosition] = useState({ tooltipX: 0, tooltipY: 0 });
  const [isTooltipShown, setIsTooltipShown] = useState(false);

  const toggleTooltip = () => {
    setIsTooltipShown(prev => !prev);
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
    <div onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {renderTooltip(position, content)}
    </div>
  );
};

export default Tooltip;
