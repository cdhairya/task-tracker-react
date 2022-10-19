import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 className="logo">{title}</h1>
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
