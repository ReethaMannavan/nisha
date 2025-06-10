import { Link,NavLink } from "react-router-dom";

const Navbar = () => {

    
  return (
    <>
   
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3">
      <NavLink className="navbar-brand" to="/">Static Blog</NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
        
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
            <li className="nav-item">
            <NavLink to="/posts" className="nav-link">Posts</NavLink>
          </li>
        </ul>
      </div>
    </nav>
    
    </>
 
  )
}

export default Navbar;
