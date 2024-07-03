import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateDepartment from "./staffpages/CreateDepartment";
import CreateProgram from "./staffpages/CreateProgram";
import CreateStudent from "./staffpages/CreateStudentAccount";
import CreateUserRoleAccount from "./staffpages/CreateUserRoleAccount";
import Dashboard from "./staffpages/Dashboard";
import DoctorAccounts from "./staffpages/DoctorAccounts";
import NurseAccounts from "./staffpages/NurseAccounts";
import StaffAccounts from "./staffpages/StaffAccounts";
import StudentsAccounts from "./staffpages/StudentsAccounts";
import LoginStaff from './login/LoginStaff';
import ForgotPassword from './login/ForgotPassword';
import LoginStudent from './login/LoginStudent';
import LoginNurse from './login/LoginNurse';
import LoginAdmin from './login/LoginAdmin';
import LoginDoctor from './login/LoginDoctor';

export default function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LoginAdmin />}></Route>
        <Route path="/dashboard" exact element={<Dashboard />}></Route>
        <Route path="/student-accounts" exact element={<StudentsAccounts />}></Route>
        <Route path="/staff-accounts" exact element={<StaffAccounts />}></Route>
        <Route path="/nurse-accounts" exact element={<NurseAccounts />}></Route>
        <Route path="/doctor-accounts" exact element={<DoctorAccounts />}></Route>
        <Route path="/create-account" exact element={<CreateUserRoleAccount/>}></Route>
        <Route path="/create-student-account" exact element={<CreateStudent />}></Route>
        <Route path="/create-department" exact element={<CreateDepartment />}></Route>
        <Route path="/create-program" exact element={<CreateProgram />}></Route>
        <Route path="/login-staff" exact element={<LoginStaff />}></Route>
        <Route path="/login-student" exact element={<LoginStudent />}></Route>
        <Route path="/login-staff" exact element={<LoginStaff />}></Route>
        <Route path="/login-nurse" exact element={<LoginNurse />}></Route>
        <Route path="/login-admin" exact element={<LoginAdmin />}></Route>
        <Route path="/login-doctor" exact element={<LoginDoctor />}></Route>
        <Route path="/change-password" exact element={<ForgotPassword />}></Route>
      </Routes>
    </BrowserRouter>
   </div>
  )
} 