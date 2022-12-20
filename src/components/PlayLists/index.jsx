import PlayListsItem from "../PlayListItem/index.jsx";
import playlistsData from "../../../assests/json/playlists.json";
import "./styles.css";

const PlayLists = () => {
  const playlistsItems = playlistsData.playlists.items;
  const playlists = playlistsItems.map((playlistsItem) => (
    <PlayListsItem details={playlistsItem} />
  ));

  return <ul class="playlists">{playlists}</ul>;
};

export default PlayLists;
