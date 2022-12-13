import Header from "../../components/Header";
import MusicList from "../../components/MusicList";
import Sidebar from "../../components/Sidebar";

const Singles = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <div>
        <Header title="Singles" />
        <MusicList />
      </div>
    </div>
  );
};

export default Singles;
