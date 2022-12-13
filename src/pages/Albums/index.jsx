import Header from "../../components/Header";
import MusicList from "../../components/MusicList";
import Sidebar from "../../components/Sidebar";

const Albums = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <div>
        <Header title="Albums" />
        <MusicList />
      </div>
    </div>
  );
};

export default Albums;
