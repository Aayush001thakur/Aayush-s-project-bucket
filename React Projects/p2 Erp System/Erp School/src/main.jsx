import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './home.jsx'
import Banner from './pages/Banner.jsx'
import LoginPage from './pages/login.jsx'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Nav from './users/Admin/NavBar.jsx'
import Dash from './users/Admin/dash.jsx'
import Class from './users/Admin/classes.jsx'
import UserProfile from './users/Admin/profile.jsx'
import CreateStudents from './users/Admin/createStudent.jsx'
import AddSubject from './users/Admin/AddSubject.jsx'
import CreateTeacher from './users/Admin/teacher.jsx'
import StudentDash from './users/students/StudentDash.jsx'
import FormComponent from './users/Admin/complain.jsx'
import NoticeSection from './users/Admin/notice.jsx'
import StudentProfile from './users/students/profile.jsx'
import StudentComplain from './users/students/complains.jsx'
import StudentAttendance from './users/students/attendance.jsx'
import StudentNotice from './users/students/notice.jsx'
import Studentresult from './users/students/result.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/" element={<App />} />
    <Route path='/admin/dash' element={<Dash />}/>
    <Route path='/admin/class' element={<Class />}/>
    <Route path='/admin/student' element ={<CreateStudents /> }/>
    <Route path='/admin/Subject' element ={<AddSubject /> }/>
    <Route path='/admin/profile' element ={<UserProfile /> }/>
    <Route path='/admin/teacher' element ={<CreateTeacher /> }/>
    <Route path='/student/dash' element ={<StudentDash /> }/>
    <Route path='/admin/complain' element ={<FormComponent /> }/>
    <Route path='/admin/notice' element ={<NoticeSection /> }/>
    <Route path='/student/profile' element ={<StudentProfile /> }/>
    <Route path='/student/complain' element ={<StudentComplain /> }/>
    <Route path='/student/attendance' element ={<StudentAttendance /> }/>
    <Route path='/student/notice' element ={<StudentNotice /> }/>
    <Route path='/student/result' element ={<Studentresult /> }/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)