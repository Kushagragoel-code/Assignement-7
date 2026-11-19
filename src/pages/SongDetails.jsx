import { useParams, Link } from 'react-router'

function SongDetails({ list, flip, calcTime }) {
  const { id } = useParams()
  const item = list.find((s) => s.id === parseInt(id))

  if (!item) {
    return (
      <div className="page">
        <h2>Song not found</h2>
        <Link to="/songs">Back to Songs</Link>
      </div>
    )
  }

  return (
    <div className="page">
      <Link to="/songs" className="back-link">
        Back to Songs
      </Link>
      <div className="details-box">
        <h2>{item.title}</h2>
        <p>Artist: {item.artist}</p>
        <p>Genre: {item.genre}</p>
        <p>Duration: {calcTime(item.duration)}</p>
        <p>Album: {item.album}</p>
        <p>Year: {item.year}</p>
        <p>Streams: {item.streams}</p>

        {item.streams >= 1000000 && <span className="badge">Trending</span>}

        <div className="detail-actions">
          <button onClick={() => flip(item.id)}>
            {item.isInPlaylist ? 'Remove from Playlist' : 'Add to Playlist'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SongDetails
