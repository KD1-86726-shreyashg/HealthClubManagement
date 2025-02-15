import React from "react";

function WorkoutFatLossPlan() {
  const workoutPlan = [
    {
      day: "Monday",
      exercise: "HIIT: Jump Squats, Burpees, Push-Ups",
      bodyPart: "Full Body",
      intensity: "3 sets of 30 seconds per exercise",
    },
    {
      // day: "Monday",
      exercise: "Kettlebell Swings",
      bodyPart: "Full Body",
      intensity: "3 sets of 20 reps",
    },
    {
      day: "Tuesday",
      exercise: "Running",
      bodyPart: "Cardio",
      intensity: "30 minutes",
    },
    {
      // day: "Tuesday",
      exercise: "Dumbbell Bench Press",
      bodyPart: "Chest",
      intensity: "3 sets of 8-10 reps",
    },
    {
      day: "Wednesday",
      exercise: "Circuit Training: Barbell Rows, Plank, Dumbbell Lunges",
      bodyPart: "Full Body",
      intensity: "3 rounds of 10-12 reps",
    },
    {
      day: "Thursday",
      exercise: "Sprints",
      bodyPart: "Cardio",
      intensity: "10 x 1-minute sprints (1 min rest)",
    },
    {
      // day: "Thursday",
      exercise: "Deadlifts",
      bodyPart: "Back, Hamstrings",
      intensity: "3 sets of 8-10 reps",
    },
    {
      day: "Friday",
      exercise: "Cycling or Rowing",
      bodyPart: "Cardio",
      intensity: "45 minutes",
    },
    {
      // day: "Friday",
      exercise: "Push-Ups, Pull-Ups",
      bodyPart: "Upper Body",
      intensity: "3 sets of 15 reps each",
    },
    {
      day: "Saturday",
      exercise: "Functional Training: Battle Ropes, Medicine Ball Slams",
      bodyPart: "Full Body",
      intensity: "3 rounds of 30 seconds per exercise",
    },
    {
      day: "Sunday",
      exercise: "Yoga or Active Recovery",
      bodyPart: "-",
      intensity: "15-20 minutes of light stretching",
    },
  ];

  return (
    <div className="container my-4 table-responsive">
      <div className="bg-primary text-white text-center py-1">
        <h4>Workout Fat Loss Plan</h4>
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

export default WorkoutFatLossPlan;
