import "./Jumbotron.css";

import Bmo from "../../assets/img/Bmo";

function Jumbotron() {
  return (
    <section className="jumbotron">
      <div className="jumbotron__container">
        <div className="jumbotron__info">
          <h1 className="jumbotron__title">Hi, I'm Alessio</h1>
          <p className="jumbotron__description">
            I'm an aspiring front end developer who likes anything related to
            gaming and tech.
          </p>
          <p className="jumbotron__welcome">Welcome to my portfolio. 👾</p>
        </div>
        <Bmo></Bmo>
      </div>
    </section>
  );
}
export default Jumbotron;
