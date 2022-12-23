import "./styles.css";

const MusicItem = ({ details }) => {
  const { id, name, artists, images, external_urls } = details;

  return (
    <li className="music-container">
      <figure>
        <a href={external_urls.spotify}>
          <img
            src={images[1].url}
            alt={"music-image-" + id}
            className="music-image"
          />
        </a>
        <figcaption>
          <a href={external_urls.spotify}>
            <p className="music-title">{name}</p>
          </a>
          <a href={artists[0].external_urls.spotify}>
            <p>{artists[0].name}</p>
          </a>
        </figcaption>
      </figure>
    </li>
  );
};

export default MusicItem;
