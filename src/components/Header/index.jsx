import "./styles.css";

const Header = ({ title }) => {
  return (
    <header className="header-container">
      <h1 className="title">{title}</h1>
    </header>
  );
};

export default Header;
