function Home({ gaane }) {
  let tot = gaane.length;
  let playl = 0;
  let hot = 0;

  for (let i = 0; i < gaane.length; i++) {
    if (gaane[i].isInPlaylist) {
      playl++;
    }
    if (gaane[i].streams >= 1000000) {
      hot++;
    }
  }

  return (
    <div>
      <h1>Music Playlist</h1>
      <p>Browse your favorite songs, filter by genre, and create your own playlist.</p>

      <div>
        <div>
          <h3>Total Songs</h3>
          <p>{tot}</p>
        </div>

        <div>
          <h3>Songs in Playlist</h3>
          <p>{playl}</p>
        </div>

        <div>
          <h3>Trending Songs</h3>
          <p>{hot}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;