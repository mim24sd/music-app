import "./styles.css";

const Sidebar = () => {
  return (
    <nav className="container">
      <ul className="sidebar">
        <li>
          <a>Playlists</a>
        </li>
        <li>
          <a>Singles</a>
        </li>
        <li>
          <a>Albums</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
