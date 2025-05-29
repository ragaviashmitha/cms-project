import { useState } from 'react';
import { Link } from 'react-router';
// import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();

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
            // navigate('/dashboard'); // Or wherever you want to go after login
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Invalid email or password',
                icon: 'error',
            });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#F4E8E2]">
            <form
                onSubmit={handleLogin}
                className="bg-[#FDF8F5] p-8 rounded-xl shadow-lg w-full max-w-sm border border-[#EAD6CC]"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-[#2D2D2D]">Sign In</h2>

                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D6B1A1]"
                    />
                </div>

                <div className="mb-6">
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D6B1A1]"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#D6B1A1] text-white py-2 rounded hover:bg-[#B98F7F] transition-colors font-semibold"
                >
                    Sign In
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
}