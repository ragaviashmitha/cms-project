import { useContext, useState } from "react";
import { AuthContext } from "../routes/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = credentials;

    // Load users from localStorage
    const users = JSON.parse(localStorage.getItem("cmsUsers")) || [];

    // Check if user exists and password matches
    const userFound = users.find(user => user.username === username && user.password === password);

    if (userFound) {
      login(username);  // update context state
      navigate(from, { replace: true });
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
          Sign In
        </h2>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          className="w-full px-4 py-2 border rounded mb-4"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="w-full px-4 py-2 border rounded mb-4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
        <p className="text-sm text-center text-[#7A6E68] mt-4">
                    Don’t have an account?{' '}
                    <a href="/signup" className="text-[#D6B1A1] hover:underline">
                       <Link to={'/signup'}>Sign up</Link>
                    </a>
                </p>
      </form>
    </div>
  );
};

export default Login;
