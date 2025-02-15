// import logo from "/assets/logo_main-48JSqkPZ.png";
// import React from "react";
// import { Link } from "react-router-dom";
// import Login from "../HomeComponent/Login";
// import Membership from "../HomeComponent/Membership";
// const UserNavbar = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg  Nav_Main">
//         <div className="container ">
//           <a className="logo" href="#">
//             <img src={logo} alt="" className="img-fluid" />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link">
//                   Home
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link to="/about" className="nav-link">
//                   About us
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link to="/membership" className="nav-link">
//                   Membership
//                 </Link>
//               </li>

// <li className="nav-item dropdown">
//   <a
//     className="nav-link"
//     href="#"
//     id="navbarDropdown"
//     role="button"
//     data-bs-toggle="dropdown"
//     aria-expanded="false"
//   >
//     Services
//   </a>
//   <ul
//     className="dropdown-menu"
//     aria-labelledby="navbarDropdown"
//     style={{ background: "black" }}
//   >
//     <li>
//       <Link className="dropdown-item" to="/classes">
//       Schedules
//       </Link>
//     </li>
//     <li>
//       <Link className="dropdown-item" to="/bmi">
//         BMI
//       </Link>
//     </li>
//     <li>
//       <Link className="dropdown-item" to="/enrollClasses">
//         Enroll Classes
//       </Link>
//     </li>
//     <li>
//       <Link className="dropdown-item" to="/feedback">
//         Feedback
//       </Link>
//     </li>
//     <li>
//       <Link className="dropdown-item" to="/rating">
//         Rating
//       </Link>
//     </li>
//   </ul>
// </li>

//               <li className="nav-item">
//                 <Link to="/userProfile" className="nav-link">
//                   Profile
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link to="/contact" className="nav-link">
//                   Contact us
//                 </Link>
//               </li>
//             </ul>

//             <button
//               className="btn btn-sm btn-danger font-weight-bold"
//               type="button"
//               style={{ borderRadius: "8px" }}
//               data-bs-toggle="modal"
//               data-bs-target="#exampleModal"
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </nav>

//       <Login />
//     </>
//   );
// };

// export default UserNavbar;

// ----------------------------------------------------------------------------------------------------------

import logo from "/assets/logo_main-48JSqkPZ.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Login from "../HomeComponent/Login";
import UserService from "../services/UserService";

const UserNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const [role, setRole] = useState(sessionStorage.getItem("role"));
  const navigate = useNavigate();

  const doLogout = async () => {
    try {
      await UserService.logout(); // Call the logout function from UserService
      sessionStorage.clear(); // Clear session storage
      setRole(null); // Reset role state
      navigate("/"); // Redirect to login page

      // Force refresh the page after navigation
      setTimeout(() => {
        window.location.reload();
      }, 10);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark Nav_Main">
        <div className="container">
          <a
            className="logo"
            style={{ width: "13%", marginLeft: "-85px" }}
            href="#"
          >
            <img src={logo} alt="" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/membership" className="nav-link">
                  Membership
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ background: "black" }}
                >
                  <li>
                    <Link className="dropdown-item" to="/classes">
                      Schedules
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/bmi">
                      BMI
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/enrollClasses">
                      Enroll Classes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/feedback">
                      Feedback
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/rating">
                      Rating
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/userProfile" className="nav-link">
                  <FaUser size={20} />
                </Link>
              </li>
            </ul>

            <button
              className="btn btn-sm btn-danger font-weight-bold"
              type="button"
              style={{ marginRight: "-47px" }}
              onClick={doLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <Login />
    </>
  );
};

export default UserNavbar;

// ----------------------------------------------------------------------------------------------------------
