import Header from "../../components/Header";
import PlayListsComponent from "../../components/PlayLists";
import Sidebar from "../../components/Sidebar";

const PlayLists = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <div>
        <Header title="Playlists" />
        <PlayListsComponent />
      </div>
    </div>
  );
};

export default PlayLists;
