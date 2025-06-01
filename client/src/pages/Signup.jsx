import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signinImg from "../images/signin.jpg"; // Ensure this path is correct

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, age, gender, email, password, confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword || !age || !gender) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("cmsUsers")) || [];

    const userExists = users.some(
      (user) =>
        user.username.toLowerCase() === username.toLowerCase() ||
        user.email.toLowerCase() === email.toLowerCase()
    );
    if (userExists) {
      alert("Username or email already taken. Please choose another.");
      return;
    }

    users.push({ username, age, gender, email, password });
    localStorage.setItem("cmsUsers", JSON.stringify(users));

    alert("User registered! Now you can log in.");
    navigate("/");
  };

  return (

    <div className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${signinImg})` }}
        // 🔄 Add your background image here
        >
  <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-14 rounded shadow-md w-100">
    <h2 className="text-2xl font-bold mb-4 text-center text-white">Sign Up</h2>

    <input
      type="text"
      placeholder="Username"
      value={formData.username}
      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      className="w-full px-4 py-2 border border-white/20 rounded mb-4 bg-transparent text-white placeholder-white"
      required
    />

    <select
      value={formData.gender}
      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
      required
      className="w-full px-4 py-2 border border-white/20 rounded mb-4 bg-transparent text-white"
    >
      <option value="" disabled className="bg-black text-white">
        Select Gender
      </option>
      <option value="male" className="bg-black text-white">Male</option>
      <option value="female" className="bg-black text-white">Female</option>
      <option value="other" className="bg-black text-white">Other</option>
    </select>

    <input
      type="number"
      placeholder="Age"
      value={formData.age}
      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
      className="w-full px-4 py-2 border border-white/20 rounded mb-4 bg-transparent text-white placeholder-white"
      required
    />

    <input
      type="email"
      placeholder="Email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      className="w-full px-4 py-2 border border-white/20 rounded mb-4 bg-transparent text-white placeholder-white"
      required
    />

    <input
      type="password"
      placeholder="Password"
      value={formData.password}
      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      className="w-full px-4 py-2 border border-white/20 rounded mb-4 bg-transparent text-white placeholder-white"
      required
    />

    <input
      type="password"
      placeholder="Confirm Password"
      value={formData.confirmPassword}
      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
      className="w-full px-4 py-2 border border-white/20 rounded mb-6 bg-transparent text-white placeholder-white"
      required
    />

    <button
      type="submit"
      className="w-full py-2 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 hover:opacity-90 transition-all"
    >
      Sign Up
    </button>
  </form>
</div>

  );
};

export default Signup;
