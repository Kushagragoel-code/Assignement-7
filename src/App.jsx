import { useState } from "react";
import { Routes, Route } from "react-router";
import gaaneData from "./data/songs";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import SongDetails from "./pages/SongDetails";
import Playlist from "./pages/Playlist";

function App() {
  const [gaane, setGaane] = useState(gaaneData);

  function changePlayl(id) {
    let temp = [];
    for (let i = 0; i < gaane.length; i++) {
      let item = gaane[i];
      if (item.id === id) {
        let newStatus = true;
        if (item.isInPlaylist === true) {
          newStatus = false;
        }
        temp.push({ ...item, isInPlaylist: newStatus });
      } else {
        temp.push(item);
      }
    }
    setGaane(temp);
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home gaane={gaane} />} />
        <Route path="/songs" element={<Songs gaane={gaane} changePlayl={changePlayl} />} />
        <Route path="/songs/:id" element={<SongDetails gaane={gaane} changePlayl={changePlayl} />} />
        <Route path="/playlist" element={<Playlist gaane={gaane} changePlayl={changePlayl} />} />
      </Routes>
    </div>
  );
}

export default App;