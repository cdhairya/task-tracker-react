import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1 className="logo">{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
