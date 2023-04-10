import { withToggler } from "../HOCs/withToggler";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";

const Album = ({ title, thumbnailUrl, toggled, changeToggle }) => {
  return (
    <div>
      <hr />
      <h3>Album info</h3>
      <h4>{title}</h4>
      <div>
        <img src={thumbnailUrl} alt="cover" />
      </div>
      <button className="like_btn" onClick={changeToggle}>
        {toggled ? (
          <>
            <img src={like} alt="like" />
            <span>I dislike it</span>
          </>
        ) : (
          <>
            <img src={dislike} alt="dislike" />
            <span>I like it</span>
          </>
        )}
      </button>
    </div>
  );
};

export default withToggler(Album);
