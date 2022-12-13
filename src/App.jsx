import { render } from "react-dom";
import Home from "./pages/Home";
import PlayLists from "./pages/PlayLists";

const App = () => {
  return <Home />;
};

render(<App />, document.getElementById("root"));
