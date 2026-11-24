import { useParams, Link } from "react-router";

function SongDetails({ gaane, changePlayl }) {
  const { id } = useParams();

  let songdone = null;
  for (let i = 0; i < gaane.length; i++) {
    if (gaane[i].id === Number(id)) {
      songdone = gaane[i];
      break;
    }
  }

  function getTime(s) {
    let m = Math.floor(s / 60);
    let r = s % 60;
    if (r < 10) {
      return m + ":0" + r;
    }
    return m + ":" + r;
  }

  if (!songdone) {
    return (
      <div>
        <h2>Song not found</h2>
        <Link to="/songs">Back</Link>
      </div>
    );
  }

  let trend = "";
  if (songdone.streams >= 1000000) {
    trend = "Trending 🔥";
  }

  let btnText = "Add to Playlist";
  if (songdone.isInPlaylist) {
    btnText = "Remove from Playlist";
  }

  return (
    <div>
      <h1>{songdone.title}</h1>
      <p>{trend}</p>
      <p>Artist: {songdone.artist}</p>
      <p>Genre: {songdone.genre}</p>
      <p>Duration: {getTime(songdone.duration)}</p>
      <p>Album: {songdone.album}</p>
      <p>Year: {songdone.year}</p>
      <p>Streams: {songdone.streams}</p>

      <button onClick={() => changePlayl(songdone.id)}>{btnText}</button>
      <Link to="/songs">Back to Songs</Link>
    </div>
  );
}

export default SongDetails;