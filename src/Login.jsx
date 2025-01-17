import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/login', formData);
      alert('Login successful!');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
    </form>
  );
}

export default Login;
