export const Album = ({ title, thumbnailUrl }) => {
  return (
    <div className="album">
      <h4>{title}</h4>
      <div>
        <img src={thumbnailUrl} alt="cover" />
      </div>
    </div>
  );
};
