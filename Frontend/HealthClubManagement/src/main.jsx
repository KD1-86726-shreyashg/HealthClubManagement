import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

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
import { BrowserRouter, Routes } from "react-router-dom";

import UserNavbar from "./UserComponent/UserNavbar.jsx";
import Rating from "./UserComponent/Rating.jsx";
import ClassCards from "./UserComponent/EnrollClasses.jsx";
import UserProfileCard from "./UserComponent/UserProfileCard.jsx";
import FeedbackForm from "./UserComponent/FeedbackForm";

import TrainersTable from "./AdminComponent/TrainersTable.jsx";
import FeedbackList from "./AdminComponent/FeedbackList.jsx";
import RatingList from "./AdminComponent/RatingList.jsx";
import TrainersData from "./AdminComponent/TrainersTable.jsx";
import UsersTable from "./AdminComponent/UserTable.jsx";
import AdminNavbar from "./AdminComponent/AdminNavbar.jsx";
import EditUserForm from "./AdminComponent/EditUserForm.jsx";
import EditTrainerForm from "./AdminComponent/EditTrainerForm.jsx";

import TrainerUserEditTable from "./TrainerComponent/TrainerUserEditTable.jsx";
import TrainerProfileCard from "./TrainerComponent/TrainerProfileCard.jsx";
import EditDietWorkoutForm from "./TrainerComponent/EditDietWorkoutForm.jsx";
import TrainerNavbar from "./TrainerComponent/TrainerNavbar.jsx";
import TrainersFeedback from "./TrainerComponent/TrainersFeedback.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />

    <BrowserRouter>
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
        <Route path="verify-otp" element={<VerifyOtp />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="trainer-cards" element={<TrainerCards />} />

        {/* ***************************** User Components  ************************************* */}
        <Route path="enrollClasses" element={<ClassCards />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="rating" element={<Rating />} />
        <Route path="userProfile" element={<UserProfileCard />} />

        {/* ***************************** Trainer Components  ************************************* */}
        <Route path="edit-diet-workoutplan" element={<EditDietWorkoutForm />} />
        <Route path="trainerProfile" element={<TrainerProfileCard />} />
        <Route
          path="get-usersUnderTrainer"
          element={<TrainerUserEditTable />}
        />
        <Route path="getTrainersFeedback" element={<TrainersFeedback />} />

        {/* ***************************** Admin Components  ************************************* */}
        <Route path="edit-trainer-form" element={<EditTrainerForm />} />
        <Route path="edit-user-form" element={<EditUserForm />} />
        <Route path="get-feedbackList" element={<FeedbackList />} />
        <Route path="get-ratingList" element={<RatingList />} />
        <Route path="get-users" element={<UsersTable />} />
        <Route path="get-trainers" element={<TrainersTable />} />
        <Route path="trainers-data" element={<TrainersData />} />
      </Routes>

      <Footer />
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>
);
