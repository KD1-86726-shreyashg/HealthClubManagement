import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'
import App from './App.jsx'

import Navbar from "./HomeComponent/Navbar.jsx";
import ContactUs from "./HomeComponent/ContactUs.jsx";
import Login from "./HomeComponent/Login.jsx";
import BMI from "./HomeComponent/BmiCalculator.jsx";
import Register from "./HomeComponent/Register.jsx";
import Schedule from "./HomeComponent/Classes.jsx";
import Footer from "./HomeComponent/Footer.jsx";
import Membership from "./HomeComponent/Membership.jsx";
import AboutUs from "./HomeComponent/AboutUs.jsx";
import UserRegister from "./HomeComponent/UserRegister.jsx";
import TrainerRegister from "./HomeComponent/TrainerRegister.jsx";
import CrouselComponent from "./HomeComponent/CrouselComponent.jsx";
import ForgotPassword from "./HomeComponent/ForgotPassword.jsx";
import VerifyOtp from "./HomeComponent/VerifyOtp.jsx";

import ResetPassword from "./HomeComponent/ResetPassword.jsx";
import TrainerCards from "./HomeComponent/TrainerCards.jsx";
import { BrowserRouter, Routes } from 'react-router-dom';

import UserNavbar from "./UserComponent/UserNavbar.jsx";
import Rating from "./UserComponent/Rating.jsx"
import ClassCards from "./UserComponent/EnrollClasses.jsx";
import UserProfileCard from "./UserComponent/UserProfileCard.jsx";
import FeedbackForm from './UserComponent/FeedbackForm';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    <BrowserRouter >
    {/* Conditional Navbar Rendering */}
    {getRole() === "ADMIN" ? (
        <AdminNavbar />
      ) : getRole() === "TRAINER" ? (
        <TrainerNavbar />
      ) : getRole() === "MEMBER" ? (
        <UserNavbar />
      ) : (
        <Navbar />
      )}


      <Routes>


{/* ***************************** HOME Components  ************************************* */}
<Route path="/" element={<CrouselComponent />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="bmi" element={<BMI />} />
        <Route path="classes" element={<Schedule />} />
        <Route path="membership" element={<Membership />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="user-register" element={<UserRegister />} />
        <Route path="register" element={<Register />} />
        <Route path="trainer-register" element={<TrainerRegister />} />

        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verify-otp" element={ <VerifyOtp />} />

        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="trainer-cards" element={<TrainerCards />} />


        
        {/* ***************************** User Components  ************************************* */}
        <Route path="enrollClasses" element={<ClassCards />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="rating" element={<Rating />} />
        <Route path="userProfile" element={<UserProfileCard />} />



      </Routes>

      <Footer/>
      <ToastContainer />
      
    </BrowserRouter>
  </StrictMode>,
)
