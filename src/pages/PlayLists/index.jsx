import Header from "../../components/Header";
import PlayListsComponent from "../../components/PlayLists";
import Sidebar from "../../components/Sidebar";

import "./styles.css";

const PlayLists = () => {
  return (
    <main className="main">
      <Sidebar />
      <Header title="Playlists" />
      <PlayListsComponent />
    </main>
  );
};

export default PlayLists;
