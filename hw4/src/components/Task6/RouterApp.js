import React, { Component } from "react";
import {
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
} from "react-router-dom";
import Task1 from "../Task1/Task1";
import Task2 from "../Task2/Task2";
import Task3 from "../Task3/Task3";
import Task4 from "../Task4/Task4";
import Task5 from "../Task5/Task5";
import { TaskDescription1 } from "../Task6/TasksDescription";
import { TaskDescription2 } from "../Task6/TasksDescription";
import { TaskDescription3 } from "../Task6/TasksDescription";
import { TaskDescription4 } from "../Task6/TasksDescription";
import { TaskDescription5 } from "../Task6/TasksDescription";
import { TaskDescription6 } from "../Task6/TasksDescription";

import backBtn from "./arrow-left.png";
import forwardBtn from "./arrow-right.png";

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

const tasksList = [
  { tasksId: 1, name: "Task #1 - Toggler HOC", content: <TaskDescription1 /> },
  { tasksId: 2, name: "Task #2 - Fetching Data HOC", content: <TaskDescription2 /> },
  { tasksId: 3, name: "Task #3 - Render-props", content: <TaskDescription3 /> },
  { tasksId: 4, name: "Task #4 - Tooltip", content: <TaskDescription4 /> },
  { tasksId: 5, name: "Task #5 - Custom hooks", content: <TaskDescription5 /> },
  { tasksId: 6, name: "Task #6 - React Router", content: <TaskDescription6 /> },
];

const TasksListDescription = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Здесь приведено описание всех заданий</h2>
      {tasksList.map(({ tasksId, name, content }) => (
        <Link
          className="task_description_link"
          key={tasksId}
          content={content}
          to={`${tasksId}`}
          onClick={() => navigate(`${tasksId}`, { state: content })}
        >
          {name}
        </Link>
      ))}

      <Outlet />
    </div>
  );
};

const TasksDescription = () => {
  const { tasksId } = useParams();
  const taskNumber = Number(tasksId) - 1; // Привязка индекса к ключу tasksId

  return <div>{tasksList[taskNumber].content}</div>;
};

const GoBackButton = () => {
  const navigate = useNavigate();
  const handleStep = () => {
    navigate(-1);
  };
  return (
    <button className="back-btn" onClick={handleStep}>
      {<img src={backBtn} alt="back" />}
    </button>
  );
};

const GoForwardButton = () => {
  const navigate = useNavigate();
  const handleStep = () => {
    navigate(+1);
  };
  return (
    <button className="forward-btn" onClick={handleStep}>
      {<img src={forwardBtn} alt="forward" />}
    </button>
  );
};

const RouterApp = () => {
  const links = [
    { id: 1, link: "/", name: "Main" },
    { id: 2, link: "task_1", name: "Task 1" },
    { id: 3, link: "task_2", name: "Task 2" },
    { id: 4, link: "task_3", name: "Task 3" },
    { id: 5, link: "task_4", name: "Task 4" },
    { id: 6, link: "task_5", name: "Task 5" },
    { id: 7, link: "task_description", name: "Tasks Description" },
  ];
  return (
    <div className="container">
      <ul className="header_nav">
          {links.map(({id, link, name}) => (
            <li>
            <NavLink className="nav_link"
              key={id}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#9AFE2E" : "transparent",
                };
              }}
              to={link}
            >
              {name}
            </NavLink>
            </li>
          ))}
        <GoBackButton />
        <GoForwardButton />
      </ul>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="task_1" element={<Task1 />} />
        <Route path="task_2" element={<Task2 />} />
        <Route path="task_3" element={<Task3 />} />
        <Route path="task_4" element={<Task4 />} />
        <Route path="task_5" element={<Task5 />} />
        <Route path="task_description" element={<TasksListDescription />}>
          <Route path=":tasksId" element={<TasksDescription />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RouterApp;
