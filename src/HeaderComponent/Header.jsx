import "./Header.css";
import Moon from "../assets/img/Moon.jsx";

function Header() {
  return (
    <header>
      <div className="header__container">
        <nav class="header__navbar">
          <ul class="header__links">
            <li class="header__list-item">
              <a class="header__link" href="">
                01. home
              </a>
            </li>
            <li class="header__list-item">
              <a class="header__link" href="">
                02. about
              </a>
            </li>
            <li class="header__list-item">
              <a class="header__link" href="">
                03. projects
              </a>
            </li>
            <li class="header__list-item">
              <a class="header__link" href="">
                04. curriculum
              </a>
            </li>
          </ul>

          <div class="header__cta">
            <div class="header__switch-lang">IT</div>
            <div class="header__switch-light">
              <Moon />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
