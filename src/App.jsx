import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MusicList from "./components/MusicList";
import PlayLists from "./components/PlayLists";
import MainLayout from "./pages/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout title="New albums and singles">
              <MusicList />
            </MainLayout>
          }
        />
        <Route
          path="/singles"
          element={
            <MainLayout title="Singles">
              <MusicList type="single" />
            </MainLayout>
          }
        />
        <Route
          path="/albums"
          element={
            <MainLayout title="Albums">
              <MusicList type="album" />
            </MainLayout>
          }
        />
        <Route
          path="/playlists"
          element={
            <MainLayout title="Playlists">
              <PlayLists />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
