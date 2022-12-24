import Header from "../../components/Header";
import MusicList from "../../components/MusicList";
import PlayLists from "../../components/PlayLists";
import Sidebar from "../../components/Sidebar";

import "./styles.css";

const Home = ({ content, title }) => {
  let contentElement = <MusicList />;
  if (content === "album") {
    contentElement = <MusicList type={content} />;
  } else if (content === "single") {
    contentElement = <MusicList type={content} />;
  } else if (content === "playlists") {
    contentElement = <PlayLists />;
  }

  return (
    <main className="main">
      <Sidebar />
      <Header title={title} />
      {contentElement}
    </main>
  );
};

export default Home;
