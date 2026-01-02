import React, { useState } from 'react';
import api from '../api';
import { useNavigate, Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', form);
      alert('Account created! You can now login.');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-blue-100 rounded-full text-blue-600">
            <UserPlus size={32} />
          </div>
        </div>
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Full Name" required className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setForm({...form, name: e.target.value})} />
          <input type="email" placeholder="Email Address" required className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setForm({...form, email: e.target.value})} />
          <input type="password" placeholder="Password" required className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setForm({...form, password: e.target.value})} />
          <button className="w-full py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">Register</button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-500">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
}