import { Link } from "react-router-dom";
import "./styles.css";

const Sidebar = () => {
  return (
    <nav className="container">
      <ul className="sidebar">
        <li key="playlists">
          <Link to="/playlists">Playlists</Link>
        </li>
        <li key="singles">
          <Link to="/singles">Singles</Link>
        </li>
        <li key="albums">
          <Link to="/albums">Albums</Link>
        </li>
        <li key="home">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
