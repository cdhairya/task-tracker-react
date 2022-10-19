import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1 className="logo">{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
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
