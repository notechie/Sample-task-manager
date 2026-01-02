import React, { useEffect, useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { Trash2, Edit3, Plus, LogOut, CheckCircle2 } from 'lucide-react';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data } = await api.get('/tasks');
      setTasks(data);
    } catch (err) { navigate('/login'); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await api.put(`/tasks/${editingId}`, { title });
      setEditingId(null);
    } else {
      await api.post('/tasks', { title });
    }
    setTitle('');
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="flex items-center justify-between py-6 mb-8 border-b">
        <div className="flex items-center space-x-2 text-blue-600">
          <CheckCircle2 size={28} />
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">Task Manager</h1>
        </div>
        <button onClick={handleLogout} className="flex items-center px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition">
          <LogOut size={18} className="mr-2"/> Logout
        </button>
      </header>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-10">
        <input 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What's on your mind?" 
          className="flex-1 p-4 bg-white border border-gray-200 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button className="px-6 py-4 font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition flex items-center shadow-lg shadow-blue-200">
          {editingId ? <Edit3 size={20}/> : <Plus size={20}/>}
          <span className="ml-2">{editingId ? 'Update' : 'Add'}</span>
        </button>
      </form>

      <div className="space-y-4">
        {tasks.length > 0 ? tasks.map(task => (
          <div key={task._id} className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <span className="text-lg font-medium text-gray-700">{task.title}</span>
            <div className="flex items-center space-x-2">
              <button onClick={() => { setEditingId(task._id); setTitle(task.title); }} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                <Edit3 size={20}/>
              </button>
              <button onClick={() => deleteTask(task._id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                <Trash2 size={20}/>
              </button>
            </div>
          </div>
        )) : (
          <div className="py-20 text-center">
            <p className="text-gray-400">Your task list is empty. Start by adding one!</p>
          </div>
        )}
      </div>
    </div>
  );
}