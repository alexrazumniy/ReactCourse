import React, { useState } from "react";
import classnames from "classnames";
import "./MenuCss.css";

const menuList = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Home 2",
  },
  {
    id: 3,
    title: "Home 3",
  },
  {
    id: 4,
    title: "Home 4",
  },
];

const MenuExample = () => {
  const [activeItem, setActiveItem] = useState(menuList[2]);

  const changeActiveItem = (item) => {
    setActiveItem(item);
  }

  return (
    <nav className="menu">
      <ul className="menu__list">
        {menuList.map((item) => (
          <li
            className={classnames("menu__item", {
              "menu__item--active": activeItem.id === item.id,
            })}
            key={item.id}
            onClick={() => changeActiveItem(item)}
          >
            <div className="menu__icon"></div>
            <span className="menu__title">{item.title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuExample;
