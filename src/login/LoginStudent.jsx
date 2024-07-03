// src/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginStudent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!loginData.username || !loginData.password) {
        throw new Error('Username and password are required.');
      }
  
      // Make an API call to verify the login credentials
      const response = await axios.post('http://localhost:8080/user/authenticate', {
        idNumber: loginData.username,
        password: loginData.password
      });

      if (response.status === 200) {
        // Successful login
        // Redirect to the dashboard (Replace '/dashboard' with your actual dashboard route)
        window.location.href = 'http://localhost:3000/';
      } else {
        throw new Error(response.data);
      }
    } catch (error) {
      // Error handling
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-[#88343B] border-gray-200 rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-[#fff]">Student Access Module</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-[#fff]">
            Username (ID Number)
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
              value={loginData.username}
              onChange={handleChange}
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
              value={loginData.password} 
              onChange={handleChange}
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

export default LoginStudent;
