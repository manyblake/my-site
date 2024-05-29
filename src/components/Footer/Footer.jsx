import ReactIcon from "../../assets/img/ReactIcon";
import VSCode from "../../assets/img/VSCode";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p className="footer__text">
        <span>coded in</span>
        <VSCode></VSCode>
        <span>and built with</span>
        <ReactIcon></ReactIcon>
      </p>
    </footer>
  );
}
