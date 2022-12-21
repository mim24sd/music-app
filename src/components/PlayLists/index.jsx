import PlayListsItem from "../PlayListItem/index.jsx";
import playlistsData from "../../assests/json/playlists.json";
import "./styles.css";

const PlayLists = () => {
  const playlistsItems = playlistsData.playlists.items;

  return (
    <ul class="playlists">
      {playlistsItems.map((playlistsItem) => (
        <PlayListsItem details={playlistsItem} />
      ))}
    </ul>
  );
};

export default PlayLists;
