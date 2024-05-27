function DropdownLabel({ children, onSelect, className }) {
  return (
    <button onClick={onSelect} className={className}>
      {children}
    </button>
  );
}

export default DropdownLabel;
