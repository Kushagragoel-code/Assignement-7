import SongCard from "../components/SongCard";

function Playlist({ gaane, changePlayl }) {
  let playl = [];
  let totSec = 0;

  for (let i = 0; i < gaane.length; i++) {
    if (gaane[i].isInPlaylist) {
      playl.push(gaane[i]);
      totSec += gaane[i].duration;
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

  if (playl.length === 0) {
    return (
      <div>
        <h1>My Playlist</h1>
        <p>Your playlist is empty</p>
      </div>
    );
  }

  return (
    <div>
      <h1>My Playlist</h1>
      <p>Total Duration: {getTime(totSec)}</p>
      <div>
        {playl.map((x) => (
          <SongCard key={x.id} songdone={x} changePlayl={changePlayl} />
        ))}
      </div>
    </div>
  );
}

export default Playlist;