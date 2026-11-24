import { Link } from "react-router";

function SongCard({ songdone, changePlayl }) {
  function getTime(s) {
    let m = Math.floor(s / 60);
    let r = s % 60;
    if (r < 10) {
      return m + ":0" + r;
    }
    return m + ":" + r;
  }

  let trend = "";
  if (songdone.streams >= 1000000) {
    trend = "Trending ";
  }

  let btnText = "Add to Playlist";
  if (songdone.isInPlaylist) {
    btnText = "Remove from Playlist";
  }

  let songLink = "/songs/" + songdone.id;

  return (
    <div>
      <h3>{songdone.title}</h3>
      <p>{trend}</p>
      <p>Artist: {songdone.artist}</p>
      <p>Genre: {songdone.genre}</p>
      <p>Duration: {getTime(songdone.duration)}</p>

      <button onClick={() => changePlayl(songdone.id)}>{btnText}</button>
      <Link to={songLink}>Details</Link>
    </div>
  );
}

export default SongCard;