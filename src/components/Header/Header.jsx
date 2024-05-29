import { useState } from "react";

import "./Header.css";

import ListItem from "./ListItem/ListItem";
import SwitchLanguage from "./SwitchLanguage/SwitchLanguage";
import SwitchLight from "./SwitchLight/SwitchLight";

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);

  function clickHandler(clickedItem) {
    console.log(clickedItem);
  }

  function hoverHandler(item) {
    setHoveredItem(item);
  }

  function leaveHandler() {
    setHoveredItem(null);
  }

  return (
    <header>
      <div className="header__container">
        <nav className="header__navbar">
          <ul className="header__links">
            {["home", "about", "projects", "curriculum"].map((item, index) => (
              <ListItem
                key={index}
                className={hoveredItem && hoveredItem !== item ? "faded" : ""}
                onHover={() => hoverHandler(item)}
                onLeave={leaveHandler}
                onSelect={() => clickHandler(item)}
              >
                {`0${index + 1}. ${item}`}
              </ListItem>
            ))}
          </ul>

          <div className="header__cta">
            <SwitchLanguage></SwitchLanguage>
            <SwitchLight></SwitchLight>
          </div>
        </nav>
      </div>
    </header>
  );
}
