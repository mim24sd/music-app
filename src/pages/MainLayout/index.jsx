import { Children } from "react";
import Header from "../../components/Header";
import MusicList from "../../components/MusicList";
import PlayLists from "../../components/PlayLists";
import Sidebar from "../../components/Sidebar";

import "./styles.css";

const MainLayout = ({ title, children }) => {
  return (
    <main className="main">
      <Sidebar />
      <Header title={title} />
      {children}
    </main>
  );
};

export default MainLayout;
