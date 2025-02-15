import React from "react";

function HighIntensityIntervalTraining() {
  const workoutPlan = [
    {
      day: "Monday",
      exercise: "Jump Squats",
      intensity: "3 sets of 12-15 reps",
      duration: "20 seconds work, 10 seconds rest",
    },
    {
      day: "Tuesday",
      exercise: "Mountain Climbers",
      intensity: "3 sets of 30 seconds",
      duration: "",
    },
    {
      day: "Wednesday",
      exercise: "Burpees",
      intensity: "3 sets of 12 reps",
      duration: "",
    },
    {
      day: "Thursday",
      exercise: "High Knees",
      intensity: "3 sets of 30 seconds",
      duration: "",
    },
    {
      day: "Friday",
      exercise: "Kettlebell Swings",
      intensity: "3 sets of 15-20 reps",
      duration: "20 seconds work, 10 seconds rest",
    },
    {
      // day: "Friday",
      exercise: "Jump Lunges",
      intensity: "3 sets of 12 reps per leg",
      duration: "",
    },
    {
      day: "Saturday",
      exercise: "Circuit: Push-Ups, Plank, Jump Rope",
      intensity: "3 rounds of 30 seconds per exercise",
      duration: "15-minute workout",
    },
  ];

  return (
    <div className="container my-4 table-responsive">
      <div className="bg-primary text-white text-center py-1">
        <h4>High-Intensity Interval Training</h4>
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
          {workoutPlan.map((item, index) => (
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

export default HighIntensityIntervalTraining;
