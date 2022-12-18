import { Link } from "react-router-dom";
import "./styles.css";

const Sidebar = () => {
  return (
    <nav className="container">
      <ul className="sidebar">
        <li>
          <Link to="/playlists">Playlists</Link>
        </li>
        <li>
          <Link to="/singles">Singles</Link>
        </li>
        <li>
          <Link to="/albums">Albums</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
