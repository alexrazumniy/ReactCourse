import { useState } from "react";

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
    <div
      className="tooltip"
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
      onMouseMove={handleMouseMove}
    >
      {renderTooltip(toggleTooltip, handleMouseMove)}

      {isTooltipShown && (
        <div style={{ left: position.tooltipX, top: position.tooltipY }}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
