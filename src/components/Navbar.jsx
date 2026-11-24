import { Link } from "react-router";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/songs">Songs</Link>
      <Link to="/playlist">Playlist</Link>
    </div>
  );
}

export default Navbar;