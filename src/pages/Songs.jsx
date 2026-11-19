import { useState } from 'react'
import SongCard from '../components/SongCard'

function Songs({ list, flip, calcTime }) {
  const [txt, setTxt] = useState('')
  const [pick, setPick] = useState('All')

  let showArr = list.filter((item) => {
    let matchText =
      item.title.toLowerCase().includes(txt.toLowerCase()) ||
      item.artist.toLowerCase().includes(txt.toLowerCase())

    let matchGenre = true
    if (pick !== 'All') {
      matchGenre = item.genre === pick
    }

    return matchText && matchGenre
  })

  return (
    <div className="page">
      <h2>All Songs</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by title or artist"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
        />
        <select value={pick} onChange={(e) => setPick(e.target.value)}>
          <option value="All">All</option>
          <option value="Romantic">Romantic</option>
          <option value="Motivational">Motivational</option>
          <option value="Sufi">Sufi</option>
          <option value="Punjabi">Punjabi</option>
        </select>
      </div>

      <div className="song-list">
        {showArr.map((item) => (
          <SongCard key={item.id} item={item} flip={flip} calcTime={calcTime} />
        ))}
      </div>
    </div>
  )
}

export default Songs
