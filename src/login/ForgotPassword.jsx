// src/ForgotPassword.js
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const modalRef = useRef(null); // Reference for the dialog element

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle change password logic here
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
    console.log('Old Password:', oldPassword);

    // Check password conditions and open the modal
    if (newPassword === confirmPassword && oldPassword) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-[#88343B] border-gray-200 rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-[#fff]">Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="oldPassword" className="block mb-2 text-sm font-medium text-[#fff]">
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-[#fff]">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-[#fff]">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-[#F7C301] rounded hover:bg-yellow-600"
          >
            Change Password
          </button>
        </form>
      </div>

      {/* Modal using <dialog> element */}
      <dialog id="my_modal_1" className="modal" ref={modalRef}>
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Password Changed</h3>
          <p className="py-4">Your password has been successfully changed.</p>
          <div className="modal-action">
            <button onClick={closeModal} className="btn btn-active text-white bg-[#F7C301] hover:bg-yellow-600">
            <a className="text-sm font-medium text-[#fff]" href="/login">Back to Login</a>
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ForgotPassword;
