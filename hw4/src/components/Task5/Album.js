import { useToggle } from "./useToggler";
import like from "../Task1/assets/like.png";
import dislike from "../Task1/assets/dislike.png";

export const Album = ({ title, thumbnailUrl }) => {
  const [isLiked, setLiked] = useToggle(false)
  return (
    <div className="album">
      <h4>{title}</h4>
      <div>
        <img src={thumbnailUrl} alt="cover" />
      </div>
      <button className="like_btn" onClick={() => setLiked()}>
        {isLiked ? (
          <>
            <img src={like} alt="like" />
            <span className="like_btn_text">I dislike it</span>
          </>
        ) : (
          <>
            <img src={dislike} alt="dislike" />
            <span className="like_btn_text">I like it</span>
          </>
        )}
      </button>
    </div>
  );
};
