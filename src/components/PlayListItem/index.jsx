const PlayLists = ({ details }) => {
  const { name, id, external_urls } = details;
  return (
    <li key={id}>
      <a href={external_urls.spotify}>{name}</a>
    </li>
  );
};

export default PlayLists;
