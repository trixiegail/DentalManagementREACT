// src/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginNurse = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-[#88343B] border-gray-200 rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-[#fff]">Nurse Access Module</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-[#fff]">
            Username (ID Number)
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#fff]">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
          <p className="text-sm font-medium text-[#fff]">Forgot your password? <a className="link link-hover text-sm font-medium text-[#fff]"><Link to="/change-password">Click here</Link></a></p>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-[#F7C301] rounded hover:bg-yellow-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginNurse;
