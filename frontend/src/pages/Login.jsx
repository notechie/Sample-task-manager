import React, { useState } from 'react';
import api from '../api';
import { useNavigate, Link } from 'react-router-dom';
import { LockKeyhole } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-blue-100 rounded-full text-blue-600">
            <LockKeyhole size={32} />
          </div>
        </div>
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" placeholder="Email Address" required className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)} />
          <button className="w-full py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">Sign In</button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-500">
          Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
}