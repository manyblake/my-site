import Card from "./Card/Card";

import "./Content.css";

export default function Content() {
  return (
    <section className="content">
      <div className="content__container">
        <h2 className="content__title">Projects</h2>
        <ul className="content__cards">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card key={index}></Card>
          ))}
        </ul>
      </div>
    </section>
  );
}
