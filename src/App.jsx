import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Singles from "./pages/Singles";
import Albums from "./pages/Albums";
import PlayLists from "./pages/PlayLists";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singles" element={<Singles />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/playlists" element={<PlayLists />} />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
