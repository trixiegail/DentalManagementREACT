import axios from 'axios';
import React, { useState } from 'react';
import Nav from '../components/Nav';

function CreateDepartment() {
  const [dept, setDept] = useState("");
  const [departmentCode, setDepartmentCode] = useState("");

  const handleChange = async (e) => {
    e.preventDefault();

    if (!dept || !departmentCode) {
      alert("Please fill in all required fields.");
      return;
    }

    const dept_data = {
      department: dept,
      deptCode: departmentCode
    };

    try {
      const response = await axios.post("http://localhost:8080/department/insertDepartment", dept_data);
      console.log(response.data);
      console.log("Submitted!");
      alert("Data submitted successfully!");
    } catch (error) {
      console.error(error);
    }

    setDept("");
    setDepartmentCode("");
  };

  return (
    <div className="ml-[265px] min-h-screen flex flex-col items-center justify-center bg-gradient-to-b">
      <Nav />
      <img src="src/image/logo.png" alt="Logo" className="absolute top-0 left-5 ml-[265px] object-center"/>

      <div className="w-full max-w-4xl p-8 space-y-6 bg-[#88343B] rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-white">Create Department</h1>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Enter Department Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Department Code"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={departmentCode}
            onChange={(e) => setDepartmentCode(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-[#F7C301] text-black font-bold rounded-lg hover:bg-[#F7C301]"
            type="submit"
            onClick={handleChange}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateDepartment;
