import { useContext, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { AuthContext } from "../routes/AuthContext";
// import signinImg from "../images/signin.jpg";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = credentials;

    const users = JSON.parse(localStorage.getItem("cmsUsers")) || [];

    const userFound = users.find(
      (user) =>
        user.username.toLowerCase() === username.trim().toLowerCase() &&
        user.password === password.trim()
    );

    if (userFound) {
      login(userFound.username);
      navigate(from, { replace: true });
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(https://i.pinimg.com/originals/e0/41/82/e04182f6094f2764001c1df50b6a2971.gif)` }}
    // 🔄 Add your background image here
    >
      <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-14 rounded shadow-md w-100">
        <h2 className="text-2xl font-extrabold mb-4 text-center text-white">Sign In</h2>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          className="w-full px-4 py-2 border rounded mb-4 text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="w-full px-4 py-2 border rounded mb-4 text-white"
          required
        />
        <button
          type="submit"
          className="w-full py-2 rounded-full font-bold text-white bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 hover:opacity-90 transition-all"
        >
          Login
        </button>
        <p className="text-sm text-center text-[#f4f1ef] mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#f68251] hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
