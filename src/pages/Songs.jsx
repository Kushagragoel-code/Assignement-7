import { useState } from "react";
import SongCard from "../components/SongCard";

function Songs({ gaane, changePlayl }) {
  const [brand, setBrand] = useState("All");

  let show = [];
  for (let i = 0; i < gaane.length; i++) {
    if (brand === "All" || gaane[i].genre === brand) {
      show.push(gaane[i]);
    }
  }

  return (
    <div>
      <h1>All Songs</h1>

      <select value={brand} onChange={(e) => setBrand(e.target.value)}>
        <option value="All">All</option>
        <option value="Romantic">Romantic</option>
        <option value="Motivational">Motivational</option>
        <option value="Sufi">Sufi</option>
        <option value="Punjabi">Punjabi</option>
      </select>

      <div>
        {show.map((x) => (
          <SongCard key={x.id} songdone={x} changePlayl={changePlayl} />
        ))}
      </div>
    </div>
  );
}

export default Songs;