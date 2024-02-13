import { Link } from "react-router-dom"
import "../css/Navigation.css";

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/" className="nav__home">Home</Link>
    </div>
  )
}

export default Navigation
