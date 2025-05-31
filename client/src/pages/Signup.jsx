import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    const { username, email, password, confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword || !age || !gender) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Basic email format validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Get existing users from localStorage or empty array
    const users = JSON.parse(localStorage.getItem("cmsUsers")) || [];


    // Check if username or email already exists
    const userExists = users.some(
      (user) => user.username === username || user.email === email
    );
    if (userExists) {
      alert("Username or email already taken. Please choose another.");
      return;

    }

    // Add new user to array and save back to localStorage
    users.push({ username, email, password });
    localStorage.setItem("cmsUsers", JSON.stringify(users));

    alert("User registered! Now you can log in.");
    navigate("/signin");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-green-700 text-center">
          Sign Up
        </h2>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          className="w-full px-4 py-2 border rounded mb-4"
          required
        />
        <select
          value={formData.gender}
          onChange={e => setFormData({ ...formData, gender: e.target.value })}
          required
          className="w-full px-4 py-2 border border-[#EAD6CC] rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#D6B1A1] text-[#2D2D2D]"
        >
          <option value="" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <br />
        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          className="w-full px-4 py-2 border rounded mb-4"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 border rounded mb-4"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-full px-4 py-2 border rounded mb-4"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          className="w-full px-4 py-2 border rounded mb-6"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
