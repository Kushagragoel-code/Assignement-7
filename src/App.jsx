import { useState } from 'react'
import { Routes, Route } from 'react-router'
import songs from './data/songs'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Songs from './pages/Songs'
import SongDetails from './pages/SongDetails'
import Playlist from './pages/Playlist'
import './App.css'

function calcTime(sec) {
  let m = Math.floor(sec / 60)
  let s = sec % 60
  if (s < 10) {
    s = '0' + s
  }
  return m + ':' + s
}

function App() {
  const [list, setList] = useState(songs)

  function flip(id) {
    let next = list.map((s) => {
      if (s.id === id) {
        return { ...s, isInPlaylist: !s.isInPlaylist }
      }
      return s
    })
    setList(next)
  }

  let cnt = 0
  for (let i = 0; i < list.length; i++) {
    if (list[i].isInPlaylist) {
      cnt++
    }
  }

  return (
    <div className="box">
      <Navbar cnt={cnt} />
      <Routes>
        <Route path="/" element={<Home list={list} />} />
        <Route path="/songs" element={<Songs list={list} flip={flip} calcTime={calcTime} />} />
        <Route path="/songs/:id" element={<SongDetails list={list} flip={flip} calcTime={calcTime} />} />
        <Route path="/playlist" element={<Playlist list={list} flip={flip} calcTime={calcTime} />} />
      </Routes>
    </div>
  )
}

export default App
