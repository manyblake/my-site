import Card from "./Card/Card";
import ArrowRight from "../../assets/img/ArrowRight";

import "./Content.css";

export default function Content() {
  return (
    <section className="content">
      <div className="content__container">
        <h2 className="content__title">Projects</h2>
        <div className="content__view-all-wrapper">
          <p className="content__view-all">
            <span>View all</span>
            <ArrowRight className="arrow-right" />
          </p>
        </div>
        <ul className="content__cards">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card key={index}></Card>
          ))}
        </ul>
      </div>
    </section>
  );
}
