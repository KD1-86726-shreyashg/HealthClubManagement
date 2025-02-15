import React from "react";

function StrengthTrainingPlan() {
  const workoutPlan = [
    {
      day: "Monday",
      exercise: "Bench Press",
      bodyPart: "Chest",
      repetition: "4 sets of 8-12 reps",
    },
    {
      // day: "Monday",
      exercise: "Incline Dumbbell Press",
      bodyPart: "Chest",
      repetition: "3 sets of 10-12 reps",
    },
    {
      // day: "Monday",
      exercise: "Dumbbell Shoulder Press",
      bodyPart: "Shoulders",
      repetition: "3 sets of 10-12 reps",
    },
    {
      day: "Tuesday",
      exercise: "Squats",
      bodyPart: "Legs",
      repetition: "4 sets of 10-12 reps",
    },
    {
      // day: "Tuesday",
      exercise: "Deadlifts",
      bodyPart: "Hamstrings, Back",
      repetition: "3 sets of 6-8 reps",
    },
    {
      // day: "Tuesday",
      exercise: "Bulgarian Split Squats",
      bodyPart: "Legs",
      repetition: "3 sets of 12 reps per leg",
    },
    {
      day: "Wednesday",
      exercise: "Barbell Rows",
      bodyPart: "Back",
      repetition: "4 sets of 8-12 reps",
    },
    {
      // day: "Wednesday",
      exercise: "Pull-Ups",
      bodyPart: "Back, Biceps",
      repetition: "3 sets of 8-10 reps",
    },
    {
      // day: "Wednesday",
      exercise: "Bicep Curls",
      bodyPart: "Biceps",
      repetition: "3 sets of 10-12 reps",
    },
    {
      day: "Thursday",
      exercise: "Overhead Press",
      bodyPart: "Shoulders",
      repetition: "4 sets of 8-10 reps",
    },
    {
      // day: "Thursday",
      exercise: "Lateral Raises",
      bodyPart: "Shoulders",
      repetition: "3 sets of 12-15 reps",
    },
    {
      day: "Friday",
      exercise: "Deadlifts",
      bodyPart: "Hamstrings, Back",
      repetition: "4 sets of 6-8 reps",
    },
    {
      // day: "Friday",
      exercise: "Bench Press",
      bodyPart: "Chest",
      repetition: "4 sets of 8-12 reps",
    },
    {
      // day: "Friday",
      exercise: "Tricep Dips",
      bodyPart: "Triceps",
      repetition: "3 sets of 10-12 reps",
    },
    {
      day: "Saturday",
      exercise: "Plank Variations",
      bodyPart: "Core",
      repetition: "3 sets of 1-minute holds",
    },
    {
      day: "Sunday",
      exercise: "Rest or Active Recovery",
      bodyPart: "-",
      repetition: "Stretching, Yoga, Light Cardio",
    },
  ];

  return (
    <div className="container my-4 table-responsive">
      <div className="bg-primary text-white text-center py-1">
        <h4>Strength Training Plan</h4>
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
              <td>{item.day}</td>
              <td>{item.exercise}</td>
              <td>{item.bodyPart}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StrengthTrainingPlan;
