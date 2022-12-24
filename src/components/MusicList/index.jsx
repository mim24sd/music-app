import musiclistData from "../../assests/json/musiclist.json";
import MusicListItem from "../../components/MusicItem/index.jsx";

import "./styles.css";

const MusicList = ({ type }) => {
  const musicListItems = musiclistData.albums.items;
  let musicList =
    type === undefined
      ? musicListItems
      : musicListItems.filter((music) => music.album_type === type);

  return (
    <ul className="musicList">
      {musicList.map((musicListItem) => (
        <MusicListItem details={musicListItem} />
      ))}
    </ul>
  );
};

export default MusicList;
