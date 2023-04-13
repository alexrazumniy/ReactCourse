import { DataMaker } from "./DataMaker";
import { Posts } from "./Posts";

const POSTS_BASE_URL = "https://jsonplaceholder.typicode.com/todos?_limit=10";

const Task3 = () => {
  return (
    <div>
      <h2 className="task_3_title">TASK #3</h2>
      <h3 className="task_3_subtitle">TODO LIST</h3>
      <DataMaker
        url={POSTS_BASE_URL}
        renderDataUrl={(data) => <Posts posts={data} />}
      />
      <hr />
    </div>
  );
};

export default Task3;
