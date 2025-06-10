import { useEffect } from "react";
import { useNavigate,NavLink} from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      navigate("/");
    }
  }, [navigate]);

  const user = JSON.parse(localStorage.getItem("loggedInUser") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <>
    

        <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3">
   
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="*" className="nav-link">Home</NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <div className="home-container">
      <h1>Welcome, {user.name || "User"}!</h1>
      <p>You have successfully logged in.</p>
      <button className="btn" onClick={handleLogout}>Logout</button>
    </div>
    </>
  );
};

export default Home;
