import "./Header.css";
import ListItem from "./ListItem";
import SwitchLanguage from "./SwitchLanguage";
import SwitchLight from "./SwitchLight";

function Header() {
  function clickHandler(clickedItem) {
    console.log(clickedItem);
  }

  return (
    <header>
      <div className="header__container">
        <nav class="header__navbar">
          <ul class="header__links">
            <ListItem onSelect={() => clickHandler("home")}>01. home</ListItem>
            <ListItem onSelect={() => clickHandler("about")}>
              02. about
            </ListItem>
            <ListItem onSelect={() => clickHandler("projects")}>
              03. projects
            </ListItem>
            <ListItem onSelect={() => clickHandler("curriculum")}>
              04. curriculum
            </ListItem>
          </ul>

          <div class="header__cta">
            <SwitchLanguage></SwitchLanguage>
            <SwitchLight></SwitchLight>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
