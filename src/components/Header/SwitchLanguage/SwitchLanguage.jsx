import { useState } from "react";

import "./SwitchLanguage.css";
import ChevronDown from "../../../assets/img/ChevronDown";
import DropdownLabel from "./DropdownLabel/DropdownLabel";

function SwitchLanguage() {
  const [dropdownClick, setDropdownClick] = useState(false);
  const [language, setLanguage] = useState("it");

  function clickHandler() {
    setDropdownClick(!dropdownClick);
  }

  function selectHandler(selectedLanguage) {
    setLanguage(selectedLanguage);
    setDropdownClick(false);
  }

  return (
    <div onClick={clickHandler} className="header__switch-lang">
      <span className="header__lang-label">{language.toUpperCase()}</span>{" "}
      <ChevronDown />
      <div className={`header__lang-dropdown ${dropdownClick ? "active" : ""}`}>
        <DropdownLabel
          className={`header__dropdown-label ${
            language === "it" ? "selected" : ""
          }`}
          onSelect={() => selectHandler("it")}
        >
          IT
        </DropdownLabel>
        <DropdownLabel
          className={`header__dropdown-label ${
            language === "en" ? "selected" : ""
          }`}
          onSelect={() => selectHandler("en")}
        >
          EN
        </DropdownLabel>
      </div>
    </div>
  );
}

export default SwitchLanguage;
