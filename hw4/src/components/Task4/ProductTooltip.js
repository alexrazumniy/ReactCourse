const ProductTooltip = ({ position, content }) => {
  const { title, price, rating } = content;

  return (
    <div
      className="tooltip"
      style={{ left: position.tooltipX, top: position.tooltipY }}
    >
      <h4 className="tooltip_title">{title}</h4>
      <p className="tooltip_option">{`Price: ${price} $`}</p>
      <p className="tooltip_option">
        {`Rating: ${rating.rate}`} {`Count: ${rating.count}`}
      </p>
    </div>
  );
};

export default ProductTooltip;
