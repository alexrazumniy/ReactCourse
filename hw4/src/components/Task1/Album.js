import { withToggler } from "./withToggler";
import like from "./assets/like.png";
import dislike from "./assets/dislike.png";

const Album = ({ title, thumbnailUrl, toggled, changeToggle }) => {
  return (
    <div>
      <h3>Album info</h3>
      <h4>{title}</h4>
      <div>
        <img src={thumbnailUrl} alt="cover" />
      </div>
      <button className="like_btn" onClick={changeToggle}>
        {toggled ? (
          <>
            <img src={like} alt="like" />
            <span className="like_it_text">I dislike it</span>
          </>
        ) : (
          <>
            <img src={dislike} alt="dislike" />
            <span className="like_it_text">I like it</span>
          </>
        )}
      </button>
      <hr />
    </div>
  );
};

export default withToggler(Album);
