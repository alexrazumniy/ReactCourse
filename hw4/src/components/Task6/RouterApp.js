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
  useHistory,
  useNavigation,
} from "react-router-dom";
import Task1 from "../Task1/Task1";
import Task2 from "../Task2/Task2";
import Task3 from "../Task3/Task3";
import Task4 from "../Task4/Task4";
import Task5 from "../Task5/Task5";
import { Task1Description } from "../Task6/TasksDescription";
import { Task2Description } from "../Task6/TasksDescription";
import { Task3Description } from "../Task6/TasksDescription";
import { Task4Description } from "../Task6/TasksDescription";
import { Task5Description } from "../Task6/TasksDescription";
import { Task6Description } from "../Task6/TasksDescription";
import { TasksDescription } from "../Task6/TasksDescription";

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
    "Task #2 - Fetching Data HOC",
    "Task #3 - Render-props",
    "Task #4 - Tooltip",
    "Task #5 - Custom hooks",
    "Task #6 - React Router",
  ];
  
  return (
    <div>
      <h2>Здесь приведено описание всех заданий</h2>
      {tasksList.map((taskId) => (
        <Link
          key={tasksList.key}
          className="task_description_link"
          to={`/task_description/${taskId}`}

          // onClick={() => navigate(`/${taskId}`, { state: tasksList.taskId })}
        >
          {taskId}
        </Link>
      ))}

      <Outlet />
    </div>
  );
};

const TasksID = () => {
  const { tasksId } = useParams();

  return <div>TaskId : {tasksId}</div>; //// вывод описания задания
};

const RouterApp = () => {
  // const history = useNavigation();

  // const goHome = () => {
  //   history.push("/");
  // };

  return (
    <div className="container">
      <nav className="header_nav">
        <div>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#9AFE2E" : "transparent",
              };
            }}
            to="/"
          >
            Main
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#9AFE2E" : "transparent",
              };
            }}
            to="/task_1"
          >
            Task 1
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#9AFE2E" : "transparent",
              };
            }}
            to="/task_2"
          >
            Task 2
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#9AFE2E" : "transparent",
              };
            }}
            to="/task_3"
          >
            Task 3
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#9AFE2E" : "transparent",
              };
            }}
            to="/task_4"
          >
            Task 4
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#9AFE2E" : "transparent",
              };
            }}
            to="/task_5"
          >
            Task 5
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#9AFE2E" : "transparent",
              };
            }}
            to="/task_description"
          >
            Task description
          </NavLink>
        </div>
        <button className="back-btn">
          <img src={buttonback} alt="back" /> back
        </button>
      </nav>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="task_1" element={<Task1 />} />
        <Route path="task_2" element={<Task2 />} />
        <Route path="task_3" element={<Task3 />} />
        <Route path="task_4" element={<Task4 />} />
        <Route path="task_5" element={<Task5 />} />
        <Route path="task_description" element={<TasksListDescription />}>
          <Route path=":tasksId" element={<TasksID />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RouterApp;
