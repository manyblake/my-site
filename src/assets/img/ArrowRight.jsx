function ArrowRight({ className }) {
  return (
    <svg
      className={className}
      width="16px"
      height="16px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        className="arrow-path"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 12-6-6m6 6-6 6m6-6H5"
      />
    </svg>
  );
}
export default ArrowRight;
