import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Sidebar from "./users/Admin/NavBar.jsx";
import App from "./home.jsx";
import LoginPage from "./pages/login.jsx";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Nav from "./users/Admin/NavBar.jsx";
import Dash from "./users/Admin/dash.jsx";
import Class from "./users/Admin/classes.jsx";
import UserProfile from "./users/Admin/profile.jsx";
import CreateStudents from "./users/Admin/createStudent.jsx";
import AddSubject from "./users/Admin/AddSubject.jsx";
import CreateTeacher from "./users/Admin/teacher.jsx";
import StudentDash from "./users/students/StudentDash.jsx";
import FormComponent from "./users/Admin/complain.jsx";
import NoticeSection from "./users/Admin/notice.jsx";
import StudentProfile from "./users/students/profile.jsx";
import StudentComplain from "./users/students/complains.jsx";
import StudentAttendance from "./users/students/attendance.jsx";
import StudentNotice from "./users/students/notice.jsx";
import Studentresult from "./users/students/result.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Admin Routes */}
        <Route path="/admin" element={<Sidebar />}>
          <Route path="dash" element={<Dash />} />
          <Route path="class" element={<Class />} />
          <Route path="student" element={<CreateStudents />} />
          <Route path="subject" element={<AddSubject />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="teacher" element={<CreateTeacher />} />
          <Route path="complain" element={<FormComponent />} />
          <Route path="notice" element={<NoticeSection />} />
        </Route>

        {/* Student Routes */}
        <Route path="/student">
          <Route path="dash" element={<StudentDash />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="complain" element={<StudentComplain />} />
          <Route path="attendance" element={<StudentAttendance />} />
          <Route path="notice" element={<StudentNotice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
