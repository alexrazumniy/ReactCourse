import React, { Component } from "react";
import {
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Task1 from "../Task1/Task1";
import Task2 from "../Task2/Task2";
import Task3 from "../Task3/Task3";
import Task4 from "../Task4/Task4";
import Task5 from "../Task5/Task5";
import buttonback from "./left-arrow-button.svg";

const Main = () => {
  return (
    <div className="main_page_content">
      <h1>
        Это решение 4-го домашнего задания
        <br /> от Алексея
      </h1>
    </div>
  );
};

const TasksListDescription = () => {
  const tasksList = [
    "Task #1 - Toggler HOC",
    "Task #2 – Fetching Data HOC",
    "Task #3 - render-props",
    "Task #4 - Tooltip",
    "Task #5 - custom hooks",
    "Task #6 - React Router",
  ];

  return (
    <div>
      <h2>Здесь приведено описание всех заданий</h2>

      {/* <Link to={`task_description/taskId/${tasksList[taskId]}`}></Link> */}
      {/* <NavLink
        style={({ isActive }) => {
          return { color: isActive ? "green" : "black" };
        }}
        to={`/task/description/${[tasksList]}`}
      ></NavLink> */}

      <Outlet />
    </div>
  );
};

const TaskDescription = () => {
  const {taskId} = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div>TaskDescription : {taskId}</div>
      <Outlet/>
    </div>
  )
}

export default class RouterApp extends Component {
  render() {
    return (
      <div className="container">
        <nav className="header_nav">
          <div>
            <Link to="/">Main</Link>
          </div>
          <div>
            <Link to="/task_1">Task 1</Link>
          </div>
          <div>
            <Link to="/task_2">Task 2</Link>
          </div>
          <div>
            <Link to="/task_3">Task 3</Link>
          </div>
          <div>
            <Link to="/task_4">Task 4</Link>
          </div>
          <div>
            <Link to="/task_5">Task 5</Link>
          </div>
          <div>
            <Link to="/task_description">Task description</Link>
          </div>
          <button className="back-btn">
            <img src={buttonback} alt="back" /> back
          </button>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/task_1" element={<Task1 />} />
          <Route path="/task_2" element={<Task2 />} />
          <Route path="/task_3" element={<Task3 />} />
          <Route path="/task_4" element={<Task4 />} />
          <Route path="/task_5" element={<Task5 />} />
          <Route path="task_description" element={<TasksListDescription />}>
            <Route path=":taskId" element={<TaskDescription />} />
          </Route>
        </Routes>
      </div>
    );
  }
}
