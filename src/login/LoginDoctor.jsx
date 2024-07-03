// src/LoginDoctor.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginDoctor = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleDoctorLogin = async (event) => {
    event.preventDefault();
    try {
      const endpoint = 'http://localhost:8080/dentalmanagement/doctor';
      const response = await axios.post(endpoint, { username, password });

      if (response.data) {
        console.log('Doctor Login successful:', response.data);
        navigate('/dashboard');
      } else {
        setErrorMessage("Doctor login failed: Invalid username or password");
        console.error('Doctor Login failed: Response data is undefined');
      }
    } catch (error) {
      setErrorMessage("Invalid username or password");
      console.error('Doctor Login failed:', error.response?.data || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-[#88343B] border-gray-200 rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-[#fff]">Doctor Access Module</h2>
        <form onSubmit={handleDoctorLogin}>
          <div className="mb-4">
            <p>{errorMessage}</p>
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
            <p className="text-sm font-medium text-[#fff]">Forgot your password? <Link to="/change-password" className="text-[#F7C301] underline">Click here</Link></p>
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

export default LoginDoctor;
