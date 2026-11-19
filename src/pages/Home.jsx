function Home({ list }) {
  let tot = list.length
  let saved = 0
  let hot = 0

  for (let i = 0; i < list.length; i++) {
    if (list[i].isInPlaylist) {
      saved++
    }
    if (list[i].streams >= 1000000) {
      hot++
    }
  }

  return (
    <div className="page">
      <h1>Music Playlist</h1>
      <p>Welcome to the music playlist application. Browse songs, explore genres, and manage your custom playlist.</p>

      <div className="boxes">
        <div className="stat-box">
          <h3>Total Songs</h3>
          <p className="num">{tot}</p>
        </div>
        <div className="stat-box">
          <h3>Songs in Playlist</h3>
          <p className="num">{saved}</p>
        </div>
        <div className="stat-box">
          <h3>Trending Songs</h3>
          <p className="num">{hot}</p>
        </div>
      </div>
    </div>
  )
}

export default Home
