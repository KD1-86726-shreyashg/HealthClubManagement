import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import CardioPlan from "../UserComponent/Workoutplan/CardioPlan";
import WorkoutFatLossPlan from "../UserComponent/Workoutplan/WorkoutFatLossPlan";
import HighIntensityIntervalTraining from "../UserComponent/Workoutplan/HighIntensityIntervalTraining";
import MuscleGainDietPlan from "../UserComponent/Dietplan/MuscleGainDietPlan";
import MuscleGainWorkoutPlan from "../UserComponent/Workoutplan/MuscleGainWorkoutPlan";
import StrengthTrainingPlan from "../UserComponent/Workoutplan/StrengthTrainingPlan";
import WorkoutWeightLossPlan from "../UserComponent/Workoutplan/WorkoutWeightLossPlan";
import FatLossDietPlan from "../UserComponent/Dietplan/FatLossDietPlan";
import VeganDietPlan from "../UserComponent/Dietplan/VeganDietPlan";
import WeightGainDietPlan from "../UserComponent/Dietplan/WeightGainDietPlan";
import WeightLossDietPlan from "../UserComponent/Dietplan/WeightLossDietPlan";

export default function Temp() {
  const [counter, setCounter] = useState(1);

  const renderComponent = () => {
    switch (counter) {
      case 1:
        return <CardioPlan />;
      case 2:
        return <HighIntensityIntervalTraining />;
      case 3:
        return <MuscleGainWorkoutPlan />;
      case 4:
        return <StrengthTrainingPlan />;
      case 5:
        return <WorkoutWeightLossPlan />;
      case 6:
        return <WorkoutFatLossPlan />;
      case 7:
        return <FatLossDietPlan />;
      case 8:
        return <MuscleGainDietPlan />;
      case 9:
        return <VeganDietPlan />;
      case 10:
        return <WeightGainDietPlan />;
      case 11:
        return <WeightLossDietPlan />;
      default:
        return <><h2>No Plan to display...</h2></>;
    }
  };

  return (
    <div className="container-fluid">
      <Row className="d-flex justify-content-center align-items-center" style={{ position: "relative", height: "100vh" }}>
        <Col xs={12} className="d-flex justify-content-center align-items-center" style={{ position: "relative", width: "100%" }}>
          {/* Dynamic component container */}
          <div
            style={{
              height: "100%", // Adjusted height for content area
              width: "100%",
              maxWidth: "1400px", // Increased max width for the container
              overflowY: "auto",
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#f8f9fa",
              display: "flex", // Added flex to center buttons and content
              justifyContent: "center", // Center content horizontally
              alignItems: "center", // Center content vertically
              position: "relative", // To allow positioning of buttons inside the container
            }}
          >
            {/* Left Button inside the card */}
            <Button
              className="btn-lg shadow-sm"
              style={{
                position: "absolute",
                left: "35px",
                backgroundColor: "#007bff",
                borderColor: "#007bff",
                fontWeight: "bold",
              }}
              variant="outline-light"
              onClick={() => setCounter(Math.max(1, counter - 1))}
            >
              <span className="font-weight-bold text-white">&lt;</span>
            </Button>

            {/* Dynamic content component */}
            {renderComponent()}

            {/* Right Button inside the card */}
            <Button
              className="btn-lg shadow-sm"
              style={{
                position: "absolute",
                right: "35px",
                backgroundColor: "#007bff",
                borderColor: "#007bff",
                fontWeight: "bold",
              }}
              variant="outline-light"
              onClick={() => setCounter(Math.min(11, counter + 1))}
            >
              <span className="font-weight-bold text-white">&gt;</span>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
