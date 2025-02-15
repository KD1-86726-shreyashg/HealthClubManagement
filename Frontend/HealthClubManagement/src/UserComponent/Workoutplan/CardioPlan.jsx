import React from "react";

function CardioPlan() {
  const cardioPlan = [
    {
      day: "Monday",
      exercise: "Running",
      intensity: "Moderate",
      duration: "30 minutes",
    },
    {
      day: "Tuesday",
      exercise: "Cycling",
      intensity: "Moderate-High",
      duration: "45 minutes",
    },
    {
      day: "Wednesday",
      exercise: "Rowing Machine",
      intensity: "Moderate",
      duration: "20 minutes",
    },
    {
      day: "Thursday",
      exercise: "Sprint Intervals",
      intensity: "High",
      duration: "10 x 1-minute sprints (1 min rest)",
    },
    {
      day: "Friday",
      exercise: "Stair Climbing",
      intensity: "High",
      duration: "30 minutes",
    },
    {
      day: "Saturday",
      exercise: "Hiking or Walking",
      intensity: "Low-Moderate",
      duration: "60 minutes",
    },
    {
      day: "Sunday",
      exercise: "Rest",
      intensity: "-",
      duration: "-",
    },
  ];

  return (
    <div className="container my-4 table-responsive">
      <div className="bg-primary text-white text-center py-1">
        <h4>Weekly Cardio Plan</h4>
      </div>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark table-dark">
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Exercise</th>
            <th scope="col">Intensity</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          {cardioPlan.map((item, index) => (
            <tr key={index}>
              <td style={{ fontWeight: "bold" }}>{item.day}</td>
              <td>{item.exercise}</td>
              <td>{item.intensity}</td>
              <td>{item.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CardioPlan;
