import { Link } from 'react-router'

function SongCard({ item, flip, calcTime }) {
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <p>Artist: {item.artist}</p>
      <p>Genre: {item.genre}</p>
      <p>Duration: {calcTime(item.duration)}</p>

      {item.streams >= 1000000 && <span className="badge">Trending</span>}

      <div className="card-actions">
        <button onClick={() => flip(item.id)}>
          {item.isInPlaylist ? 'Remove from Playlist' : 'Add to Playlist'}
        </button>
        <Link to={'/songs/' + item.id} className="link-btn">
          View Details
        </Link>
      </div>
    </div>
  )
}

export default SongCard
