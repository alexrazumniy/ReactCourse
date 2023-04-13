import React, { useState } from "react";

const Tooltip = ({ renderTooltip, content }) => {
  const [position, setPosition] = useState({ tooltipX: 0, tooltipY: 0 });
  const [isTooltipShown, setIsTooltipShown] = useState(false);

  const toggleTooltip = () => {
    setIsTooltipShown((prev) => !prev);
  };

  const handleMouseMove = (event) => {
    setPosition({ tooltipX: event.clientX, tooltipY: event.clientY });
  };

  return (
    <>
      {renderTooltip(toggleTooltip, handleMouseMove)}

      {isTooltipShown && (
        <div
          className="tooltip"
          style={{ left: position.tooltipX, top: position.tooltipY }}
        >
          {content}
        </div>
      )}
    </>
  );
};

export default Tooltip;
