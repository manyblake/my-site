import ChevronDown from "../assets/img/ChevronDown";

function SwitchLanguage() {
  function clickHandler() {}

  return (
    <div onClick={clickHandler} class="header__switch-lang">
      <span class="header__lang-label">IT</span> <ChevronDown />
      <div class="header__lang-dropdown">
        <button class="header__dropdown-label selected">IT</button>
        <button class="header__dropdown-label">EN</button>
      </div>
    </div>
  );
}
export default SwitchLanguage;
