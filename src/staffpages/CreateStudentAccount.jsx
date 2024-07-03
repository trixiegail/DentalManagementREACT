import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from '../components/Nav';

function CreateStudentAccount() {
  const [idnumber, setIdnumber] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [studentDepartment, setStudentDepartment] = useState("");
  const [studentProgram, setStudentProgram] = useState("");
  const [programs, setPrograms] = useState([]);
  const [studentYearLevel, setYearLevel] = useState("");
  const [studentBirthdate, setStudentBirthdate] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  useEffect(() => {
    // Automatically set the password to the lastname in all capital letters
    setStudentPassword(lastname.toUpperCase());
  }, [lastname]);

  const departmentPrograms = {
    cea: ["BS Architecture", "BS Chemical Engineering", "BS Civil Engineering", "BS Computer Engineering",
      "BS Electrical Engineering", "BS Electronics Engineering", "BS Industrial Engineering", "BS Mechanical Engineering",
      "BS Mining Engineering"
    ],
    cmba: ["BS Accountancy", "BS Accounting Information Systems", "BS Management Accounting", "BS Business Administration",
      "BS Hospitality Management", "BS Tourism Management", "BS Office Administration", "Bachelor in Public Administration"
    ],
    cas: ["AB Communication", "AB English with Applied Linguistics", "Bachelor of Elementary Education", "Bachelor of Secondary Education",
      "Bachelor of Multimedia Arts", "BS Biology", "BS Math with Applied Industrial Mathematics", "BS Psychology"
    ],
    cnahs: ["BS Nursing", "BS Pharmacy"],
    ccs: ["BS Information Technology", "BS Computer Science"],
    ccj: ["BS Criminology"]
  };

  useEffect(() => {
    // Update programs when department changes
    if (studentDepartment) {
      setPrograms(departmentPrograms[studentDepartment] || []);
    } else {
      setPrograms([]);
    }
  }, [studentDepartment]);


  const handleDepartmentChange = (e) => {
    setStudentDepartment(e.target.value);
  };

  const handleChange = async () => {
    // Check if any of the required fields are empty
    if (!idnumber || !firstname || !lastname || !studentDepartment || !studentProgram || !studentBirthdate || !studentEmail || !studentPassword) {
      showModal("Error", "Please fill in all required fields.");
      return;
    }

    // Format ID
    const idPattern = /^\d{2}-\d{4}-\d{3}$/;
    // Check if the entered ID matches the expected format
    if (!idPattern.test(idnumber)) {
      showModal("Error", "Invalid ID format. Please enter ID in the format xx-xxxx-xxx");
      return;
    }

    // Normalize and validate email
    const normalizedEmail = validEmail(studentEmail);
    if (!normalizedEmail) {
      return;
    }

    const student_data = {
      idNumber: idnumber,
      firstname: firstname,
      lastname: lastname,
      department: studentDepartment,
      program: studentProgram,
      yearLevel: studentYearLevel,
      birthdate: studentBirthdate,
      email: studentEmail,
      password: studentPassword
    }
    try {
      const response = await axios.post("http://localhost:8080/user/insertStudent", student_data);
      console.log(response.data);
      console.log("Submitted!");
      showModal("Success", "Data submitted successfully!");
    } catch (error) {
      console.error(error);
      showModal("Error", "An error occurred while submitting data.");
    }

    setIdnumber("");
    setFirstname("");
    setLastname("");
    setStudentDepartment("");
    setStudentProgram("");
    setYearLevel("");
    setStudentBirthdate("");
    setStudentEmail("");
    setStudentPassword("");
  };

  // Function to validate and normalize email format
  const validEmail = (studentEmail) => {
    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if email matches the pattern
    if (!emailPattern.test(studentEmail)) {
      // Handle invalid email address
      showModal("Error", "Invalid email address");
      return null;
    }

    // Normalize email to lowercase
    return studentEmail.toLowerCase();
  };

  const handleProgramChange = (e) => {
    setStudentProgram(e.target.value);
  };

  const handleYearLevelChange = (event) => {
    setYearLevel(event.target.value);
  };

  const showModal = (title, message) => {
    setModalTitle(title);
    setModalMessage(message);
    document.getElementById('my_modal_1').showModal();
  };

  return (
    <div className="ml-[265px] min-h-screen flex flex-col items-center justify-center bg-gradient-to-b ">
      <Nav />
      <img src="src/image/logo.png" alt="Logo" className="absolute top-0 left-5 ml-[265px] object-center"/>
      
      <div className="w-full max-w-4xl p-8 space-y-6 bg-[#88343B] rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-white">Create Student Account</h1>
        <div className="grid grid-cols-3 gap-4">
          <input
            type='text'
            placeholder='Enter ID Number'
            className='w-full px-3 py-2 border border-gray-300 rounded-lg'
            value={idnumber}
            onChange={(e) => setIdnumber(e.target.value)}
          />
          <input
            type='text'
            placeholder='Enter Firstname'
            className='w-full px-3 py-2 border border-gray-300 rounded-lg'
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            type='text'
            placeholder='Enter Lastname'
            className='w-full px-3 py-2 border border-gray-300 rounded-lg'
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <select
            value={studentDepartment}
            onChange={handleDepartmentChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-lg'
          >
            <option value="">Department</option>
            <option value="cea">College of Engineering and Architecture</option>
            <option value="cmba">College of Management, Business and Accountancy</option>
            <option value="cas">College of Arts, Sciences and Education</option>
            <option value="cnahs">College of Nursing and Allied Health Sciences</option>
            <option value="ccs">College of Computer Studies</option>
            <option value="ccj">College of Criminal Justice</option>
          </select>
          <select
            className='w-full px-3 py-2 border border-gray-300 rounded-lg'
            value={studentProgram}
            onChange={handleProgramChange}
          >
            <option value="">Program</option>
            {programs.map((program, index) => (
              <option key={index} value={program}>{program}</option>
            ))}
          </select>
          <select
            value={studentYearLevel}
            onChange={handleYearLevelChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-lg'
          >
            <option value="">Year...</option>
            <option value="firstyear">First Year</option>
            <option value="secondyear">Second Year</option>
            <option value="thirdyear">Third Year</option>
            <option value="fourthyear">Fourth Year</option>
          </select>
          <input
            type='date'
            placeholder='Select Birthdate'
            className='w-full px-3 py-2 border border-gray-300 rounded-lg'
            value={studentBirthdate}
            onChange={(e) => setStudentBirthdate(e.target.value)}
          />
          <input
            type='text'
            placeholder='Enter Email'
            className='w-full px-3 py-2 border border-gray-300 rounded-lg'
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Enter Password'
            className='w-full px-3 py-2 border border-gray-300 rounded-lg'
            value={studentPassword}
            onChange={(e) => setStudentPassword(e.target.value)}
            readOnly // Make the password field read-only
          />
        </div>
        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-[#F7C301] text-white font-bold rounded-lg hover:bg-[#F7C301]"
            type="submit"
            onClick={handleChange}
          >
            Create Account
          </button>
        </div>

        {/* Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{modalTitle}</h3>
          <p className="py-4">{modalMessage}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      </div>
    </div>
  );
}

export default CreateStudentAccount;
