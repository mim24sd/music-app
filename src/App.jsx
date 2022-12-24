import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home title="New albums and singles" />} />
        <Route
          path="/singles"
          element={<Home content={"single"} title="Singles" />}
        />
        <Route
          path="/albums"
          element={<Home content={"album"} title="Albums" />}
        />
        <Route
          path="/playlists"
          element={<Home content={"playlists"} title="Playlists" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
