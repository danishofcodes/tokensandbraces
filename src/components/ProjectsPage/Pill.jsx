
const Pill = ({ children, secondary }) => {
  return <span className={secondary ? "pill-secondary" : "pill"}>{children}</span>;
};

export default Pill;