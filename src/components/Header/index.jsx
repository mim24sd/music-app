import "./styles.css";

const Header = ({ title }) => {
  return (
    <header className="container">
      <h1 className="title">{title}</h1>
      <hr className="horizontal-line" />
    </header>
  );
};

export default Header;
