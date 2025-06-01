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
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
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
            className="px-4 py-1 rounded-md font-bold text-white bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 hover:opacity-90 transition-all"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="px-4 py-1 rounded-md font-semibold text-white bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 hover:opacity-90 transition-all"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
