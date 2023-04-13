import { Albums } from "./AlbumsList";
import { Users } from "./UsersList";

const Task5 = () => {
  return (
    <div className="task_container">
      <h2>TASK #5</h2>
      <h3>USERS</h3>
      <Users />
      <hr />
      <h3>ALBUMS</h3>
      <Albums />
      <hr />
    </div>
  );
};

export default Task5;
