import UsersList from "./UsersList";
import Albumslist from "./Albumslist";
const USERS_BASE_URL = "https://jsonplaceholder.typicode.com/users?_limit=5";
const ALBUMS_BASE_URL = "https://jsonplaceholder.typicode.com/albums/1/photos?_limit=5";

const Task2 = () => {
  return (
      <div className="task_container">
      <h2>TASK #2</h2>
      <UsersList url={USERS_BASE_URL} />
      <hr />
      <Albumslist url={ALBUMS_BASE_URL} />
      <hr />
    </div>
   );
};

export default Task2;
