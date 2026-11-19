import { Link } from 'react-router'

function Navbar({ cnt }) {
  return (
    <nav className="nav">
      <div className="nav-brand">Music App</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/songs">Songs</Link>
        <Link to="/playlist">Playlist ({cnt})</Link>
      </div>
    </nav>
  )
}

export default Navbar
