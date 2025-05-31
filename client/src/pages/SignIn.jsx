import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let db = localStorage.getItem('users');
    db = db ? JSON.parse(db) : { users: [] };

    const user = db.users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      Swal.fire({
        title: 'Success',
        text: 'Login successful!',
        icon: 'success',
      });
      navigate('/dashboard');
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Invalid email or password',
        icon: 'error',
      });
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#2d258a] to-[#2f2f66]">
      
      {/* 🔹 Top Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#1E1B3A] border-b border-indigo-600 shadow-lg">
  <h1 className="text-white text-xl font-bold">📚 Research Hub</h1>
  <Link to="/" className="text-cyan-300 hover:text-white transition duration-200 font-medium">
    Home
  </Link>
</nav>

      {/* 🔹 Login Form */}
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <form
          onSubmit={handleLogin}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-sm border border-purple-400"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Sign In</h2>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-cyan-400 bg-white/20 text-white placeholder:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-cyan-400 bg-white/20 text-white placeholder:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white py-2 rounded-md font-semibold text-lg shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Sign In
          </button>

          <p className="text-sm text-center text-white mt-4">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-yellow-300 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

