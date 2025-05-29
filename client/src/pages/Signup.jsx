


import { useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

export default function Signup() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  function handleSubmit(event) {
    event.preventDefault();
    let db = localStorage.getItem('db');
    if (db === null) {
      db = {
        users: [{ name, gender, age, email, password }]
      };
      localStorage.setItem('users', JSON.stringify(db));
      Swal.fire({
        title: "Success",
        text: "User created successfully",
        icon: "success"
      });
      navigate('/login');
    } else {
      const parsedDb = JSON.parse(db);
      const existingUser = parsedDb.users.find((user) => user.email === email);
      if (existingUser) {
        Swal.fire({
          title: "Invalid",
          text: "User already exists",
          icon: "error"
        });
      } else {
        parsedDb.users.push({ name, gender, age, email, password });
        localStorage.setItem('users', JSON.stringify(parsedDb));
        Swal.fire({
          title: "Success",
          text: "User created successfully",
          icon: "success"
        });
        navigate('/login');
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F4E8E2]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#FDF8F5] p-8 rounded-xl shadow-lg w-full max-w-sm border border-[#EAD6CC]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#2D2D2D]">Sign Up</h2>

        <div className="mb-4">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-[#EAD6CC] rounded focus:outline-none focus:ring-2 focus:ring-[#D6B1A1] placeholder-[#7A6E68] text-[#2D2D2D]"
            placeholder="Full Name"
          />
        </div>

        <div className="mb-4">
          <select
            value={gender}
            onChange={e => setGender(e.target.value)}
            required
            className="w-full px-4 py-2 border border-[#EAD6CC] rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#D6B1A1] text-[#2D2D2D]"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <input
            type="number"
            value={age}
            onChange={e => setAge(e.target.value)}
            required
            className="w-full px-4 py-2 border border-[#EAD6CC] rounded focus:outline-none focus:ring-2 focus:ring-[#D6B1A1] placeholder-[#7A6E68] text-[#2D2D2D]"
            placeholder="Age"
            min="1"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-[#EAD6CC] rounded focus:outline-none focus:ring-2 focus:ring-[#D6B1A1] placeholder-[#7A6E68] text-[#2D2D2D]"
            placeholder="Email"
          />
        </div>

       <div className="mb-4 relative">
  <input
    type={showPassword ? "text" : "password"}
    value={password}
    onChange={e => setPassword(e.target.value)}
    required
    className="w-full px-4 py-2 pr-10 border border-[#EAD6CC] rounded focus:outline-none focus:ring-2 focus:ring-[#D6B1A1] placeholder-[#7A6E68] text-[#2D2D2D]"
    placeholder="Password"
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-2 text-sm text-[#7A6E68] focus:outline-none"
  >
    {showPassword ? "Hide" : "Show"}
  </button>
</div>

       <div className="mb-6 relative">
  <input
    type={showConfirmPassword ? "text" : "password"}
    value={confirmPassword}
    onChange={e => setConfirmPassword(e.target.value)}
    required
    className="w-full px-4 py-2 pr-10 border border-[#EAD6CC] rounded focus:outline-none focus:ring-2 focus:ring-[#D6B1A1] placeholder-[#7A6E68] text-[#2D2D2D]"
    placeholder="Confirm Password"
  />
  <button
    type="button"
    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    className="absolute right-3 top-2 text-sm text-[#7A6E68] focus:outline-none"
  >
    {showConfirmPassword ? "Hide" : "Show"}
  </button>
</div>
        <button
          type="submit"
          className="w-full bg-[#D6B1A1] text-white py-2 rounded hover:bg-[#B98F7F] transition-colors font-semibold"
        >
          Create new account
        </button>
        
      </form>
    </div>
  );
}



