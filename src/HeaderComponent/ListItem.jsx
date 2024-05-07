function ListItem({ children, onSelect }) {
  return (
    <li class="header__list-item">
      <button onClick={onSelect} class="header__link" href="">
        {children}
      </button>
    </li>
  );
}
export default ListItem;
