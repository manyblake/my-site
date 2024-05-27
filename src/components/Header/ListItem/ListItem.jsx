function ListItem({ children, onSelect }) {
  return (
    <li className="header__list-item">
      <button onClick={onSelect} className="header__link" href="">
        {children}
      </button>
    </li>
  );
}
export default ListItem;
