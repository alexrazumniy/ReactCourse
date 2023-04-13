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

const Home = () => {
  return <div>Home page</div>;
};

const Learn = () => {
  return (
    <div>
      <h1>Learn page</h1>
      <Link to="/learn/courses">Courses</Link>
      <Link to="/learn/examples">Examples</Link>

      <Outlet />
    </div>
  );
};

const News = () => {
  return <div>News page</div>;
};

const Courses = () => {
  const coursesList = ["react", "angular", "vue"];

  const randomCourse =
    coursesList[Math.floor(Math.random() * coursesList.length)];

  return (
    <div>
      <h1>Courses</h1>
      <div>More test</div>

      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "red" : "black",
          };
        }}
        to={`/learn/courses/${randomCourse}`}
      >
        {randomCourse}
      </NavLink>

      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "red" : "black",
          };
        }}
        to={`/learn/courses/test`}
      >
        test
      </NavLink>

      <Outlet />
    </div>
  );
};

const CoursesID = () => {
  const { coursesId } = useParams();

  const navigate = useNavigate();

  return (
    <div>
      <div>CourseID : {coursesId}</div>
      <button onClick={() => navigate("/price", { state: coursesId })}>
        Price
      </button>

      <Link to="/price" state={coursesId}>
        TEST Link
      </Link>
    </div>
  );
};

const Price = () => {
  const location = useLocation();

  return <div>Price is: {location.state}</div>;
};

export default class RouterApp extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/learn">Learn</Link>
          </div>
          <div>
            <Link to="/news">News</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="learn" element={<Learn />}>
            <Route path="courses" element={<Courses />}>
              <Route path=":coursesId" element={<CoursesID />} />
            </Route>
          </Route>
          <Route path="/price" element={<Price />}></Route>
        </Routes>
      </div>
    );
  }
}
