import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';

function CreateProgram() {
  const [prog, setProg] = useState('');
  const [progCode, setProgCode] = useState('');
  const [departments, setDepartments] = useState([]);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState('');
  const [programs, setPrograms] = useState([]); // State to store fetched programs

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/department/getAllDepartment');
      if (response.status === 200) {
        setDepartments(response.data);
        console.log("Departments fetched:", response.data);
      } else {
        throw new Error('Failed to fetch departments');
      }
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  const fetchProgramsByDepartment = async (departmentId) => {
    try {
      const response = await axios.get(`http://localhost:8080/program/getProgramsByDepartment?departmentId=${departmentId}`);
      if (response.status === 200) {
        setPrograms(response.data);
        console.log("Programs fetched:", response.data);
      } else {
        throw new Error('Failed to fetch programs');
      }
    } catch (error) {
      console.error('Error fetching programs:', error);
    }
  };

  const handleDepartmentChange = (e) => {
    const departmentId = e.target.value;
    setSelectedDepartmentId(departmentId);
    if (departmentId) {
      fetchProgramsByDepartment(departmentId);
    } else {
      setPrograms([]); // Clear programs if no department is selected
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prog || !progCode || !selectedDepartmentId) {
      alert('Please fill in all required fields and select a department.');
      return;
    }

    const prog_data = {
      program: prog,
      programCode: progCode,
    };

    try {
      const response = await axios.post(`http://localhost:8080/program/insertProgram?departmentId=${selectedDepartmentId}`, prog_data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Program created:', response.data);
      alert('Program created successfully!');
      // Reset form
      setProg('');
      setProgCode('');
      setSelectedDepartmentId('');
      setPrograms([]); // Clear programs after submission
    } catch (error) {
      console.error('Error creating program:', error.response ? error.response.data : error.message);
      alert('Failed to create program. Please check the console for more details.');
    }
  };

  return (
    <div className="ml-[265px] min-h-screen flex flex-col items-center justify-center bg-gradient-to-b">
      <Nav />
      <img src="src/image/logo.png" alt="Logo" className="absolute top-0 left-5 ml-[265px] object-center"/>

      <div className="w-full max-w-4xl p-8 space-y-6 bg-[#88343B] rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-white">Create Program</h1>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Enter Program Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={prog}
            onChange={(e) => setProg(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Program Code"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={progCode}
            onChange={(e) => setProgCode(e.target.value)}
          />
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={selectedDepartmentId}
            onChange={handleDepartmentChange}
            required
          >
            <option value="">Select Department</option>
            {departments.map((department) => (
              <option key={department.id} value={department.id}>
                {department.department}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-[#F7C301] text-black font-bold rounded-lg hover:bg-[#F7C301]"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      {/* Section to display programs of the selected department */}
      {selectedDepartmentId && (
        <div className="w-full max-w-4xl p-8 space-y-6 bg-[#FFFFFF] rounded-lg shadow-md mt-8">
          <h2 className="text-xl font-bold text-center text-[#88343B]">Programs in Selected Department</h2>
          {programs.length > 0 ? (
            <ul>
              {programs.map((program) => (
                <li key={program.id} className="text-center">
                  {program.program} (Code: {program.programCode})
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">No programs available for this department.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CreateProgram;
