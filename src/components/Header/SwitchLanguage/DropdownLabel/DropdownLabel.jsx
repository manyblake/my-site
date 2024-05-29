export default function DropdownLabel({ children, onSelect, className }) {
  return (
    <button onClick={onSelect} className={className}>
      {children}
    </button>
  );
}
