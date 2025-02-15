import React from "react";

function WorkoutWeightLossPlan() {
  const workoutPlan = [
    {
      day: "Monday",
      exercise: "Jump Rope",
      bodyPart: "Cardio",
      intensity: "10 minutes",
    },
    {
      // day: "Monday",
      exercise: "Bodyweight Squats",
      bodyPart: "Legs",
      intensity: "3 sets of 20 reps",
    },
    {
      // day: "Monday",
      exercise: "Push-Ups",
      bodyPart: "Chest, Triceps",
      intensity: "3 sets of 15-20 reps",
    },
    {
      day: "Tuesday",
      exercise: "Walking or Light Jogging",
      bodyPart: "Cardio",
      intensity: "45 minutes",
    },
    {
      // day: "Tuesday",
      exercise: "Plank Variations",
      bodyPart: "Core",
      intensity: "3 sets of 1-minute holds",
    },
    {
      day: "Wednesday",
      exercise: "Mountain Climbers",
      bodyPart: "Full Body, Cardio",
      intensity: "3 sets of 30 seconds",
    },
    {
      // day: "Wednesday",
      exercise: "Lunges",
      bodyPart: "Legs",
      intensity: "3 sets of 12 reps per leg",
    },
    {
      // day: "Wednesday",
      exercise: "Russian Twists",
      bodyPart: "Core",
      intensity: "3 sets of 20 twists",
    },
    {
      day: "Thursday",
      exercise: "Stair Climbing",
      bodyPart: "Cardio",
      intensity: "20-30 minutes",
    },
    {
      day: "Friday",
      exercise: "Burpees",
      bodyPart: "Full Body, Cardio",
      intensity: "3 sets of 12 reps",
    },
    {
      // day: "Friday",
      exercise: "Jump Squats",
      bodyPart: "Legs, Cardio",
      intensity: "3 sets of 12 reps",
    },
    {
      day: "Saturday",
      exercise: "HIIT: High Knees, Push-Ups, Jump Rope",
      bodyPart: "Full Body",
      intensity: "3 sets of 30 seconds per exercise",
    },
    {
      day: "Sunday",
      exercise: "Yoga or Light Stretching",
      bodyPart: "-",
      intensity: "15-20 minutes",
    },
  ];

  return (
    <div className="container my-4 table-responsive">
      <div className="bg-primary text-white text-center py-1">
        <h4>Workout Plan for Weight Loss</h4>
      </div>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark table-dark">
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Exercise</th>
            <th scope="col">Body Part</th>
            <th scope="col">Intensity/Reps/Sets</th>
          </tr>
        </thead>
        <tbody>
          {workoutPlan.map((item, index) => (
            <tr key={index}>
              <td style={{ fontWeight: "bold" }}>{item.day}</td>
              <td>{item.exercise}</td>
              <td>{item.bodyPart}</td>
              <td>{item.intensity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WorkoutWeightLossPlan;
