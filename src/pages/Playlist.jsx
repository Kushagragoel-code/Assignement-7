import SongCard from '../components/SongCard'

function Playlist({ list, flip, calcTime }) {
  let mySongs = list.filter((s) => s.isInPlaylist)

  let tot = 0
  for (let i = 0; i < mySongs.length; i++) {
    tot += mySongs[i].duration
  }

  return (
    <div className="page">
      <h2>My Playlist</h2>
      {mySongs.length === 0 ? (
        <p>Your playlist is empty</p>
      ) : (
        <div>
          <p>Total Duration: {calcTime(tot)}</p>
          <div className="song-list">
            {mySongs.map((item) => (
              <SongCard key={item.id} item={item} flip={flip} calcTime={calcTime} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Playlist
