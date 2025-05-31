// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../routes/AuthContext";

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleProtectedClick = (e, path) => {
    e.preventDefault();
    if (!isAuth) {
      alert("Please log in to access this page.");
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="bg-blue-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/home" className="text-xl font-bold">
        CMS
      </Link>
      <div className="space-x-4">
        <Link to="/home">Home</Link>
        <button onClick={(e) => handleProtectedClick(e, "/upload")}>
          Upload
        </button>
        <button onClick={(e) => handleProtectedClick(e, "/view")}>
          View
        </button>
        <Link to="/developers">Developers</Link>
        <Link to="/aboutus">About Us</Link>

        {!isAuth ? (
          <Link
            to="/signin"
            className="bg-white text-blue-800 px-3 py-1 rounded"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
