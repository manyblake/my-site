import "./Card.css";

export default function Card() {
  return (
    <li className="card">
      <h3 className="card__title">Project Title</h3>
      <p className="card__description">
        Brief description of the project that should be max 2 lines
      </p>

      <div className="card__techs">
        <p className="card__techs-stacks">Tech stack:</p>
        <ul className="card__techs-labels">
          {Array.from({ length: 4 }).map((_, index) => (
            <li key={index} className="card__techs-label">
              vue.js
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
