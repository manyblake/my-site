import "./ListItem.css";

function ListItem({ children, onSelect, onHover, onLeave, className }) {
  return (
    <li
      className={`header__list-item ${className}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <button onClick={onSelect} className="header__link">
        {children}
      </button>
    </li>
  );
}

export default ListItem;
