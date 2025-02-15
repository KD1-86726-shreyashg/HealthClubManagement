import React from "react";

function MuscleGainWorkoutPlan() {
  const workoutPlan = [
    {
      day: "Monday",
      exercises: [
        {
          exercise: "Bench Press",
          bodyPart: "Chest",
          repsSets: "4 sets of 6-8 reps",
        },
        {
          exercise: "Incline Dumbbell Press",
          bodyPart: "Chest",
          repsSets: "3 sets of 8-12 reps",
        },
        {
          exercise: "Dumbbell Shoulder Press",
          bodyPart: "Shoulders",
          repsSets: "3 sets of 8-12 reps",
        },
        {
          exercise: "Push-Ups (Weighted)",
          bodyPart: "Chest, Triceps",
          repsSets: "3 sets of 10-15 reps",
        },
      ],
    },
    {
      day: "Tuesday",
      exercises: [
        {
          exercise: "Squats",
          bodyPart: "Legs",
          repsSets: "4 sets of 8-10 reps",
        },
        {
          exercise: "Romanian Deadlifts",
          bodyPart: "Hamstrings",
          repsSets: "3 sets of 6-8 reps",
        },
        {
          exercise: "Leg Press",
          bodyPart: "Legs, Glutes",
          repsSets: "3 sets of 10-12 reps",
        },
        {
          exercise: "Calf Raises",
          bodyPart: "Calves",
          repsSets: "3 sets of 15-20 reps",
        },
      ],
    },
    {
      day: "Wednesday",
      exercises: [
        {
          exercise: "Barbell Rows",
          bodyPart: "Back",
          repsSets: "4 sets of 6-8 reps",
        },
        {
          exercise: "Pull-Ups",
          bodyPart: "Back, Biceps",
          repsSets: "3 sets of 8-12 reps",
        },
        {
          exercise: "Dumbbell Bicep Curls",
          bodyPart: "Biceps",
          repsSets: "3 sets of 10-12 reps",
        },
      ],
    },
    {
      day: "Thursday",
      exercises: [
        {
          exercise: "Overhead Press",
          bodyPart: "Shoulders",
          repsSets: "4 sets of 6-8 reps",
        },
        {
          exercise: "Arnold Press",
          bodyPart: "Shoulders",
          repsSets: "3 sets of 8-12 reps",
        },
      ],
    },
    {
      day: "Friday",
      exercises: [
        {
          exercise: "Deadlifts",
          bodyPart: "Hamstrings, Back",
          repsSets: "4 sets of 5-6 reps",
        },
        {
          exercise: "Bench Press",
          bodyPart: "Chest",
          repsSets: "4 sets of 6-8 reps",
        },
      ],
    },
    {
      day: "Saturday",
      exercises: [
        {
          exercise: "Plank",
          bodyPart: "Core",
          repsSets: "3 sets of 1-minute holds",
        },
        {
          exercise: "Hanging Leg Raises",
          bodyPart: "Core",
          repsSets: "3 sets of 12-15 reps",
        },
      ],
    },
    {
      day: "Sunday",
      exercises: [
        {
          exercise: "Rest or Active Recovery",
          bodyPart: "-",
          repsSets: "Yoga or Light Cardio",
        },
      ],
    },
  ];

  return (
    <div className="container my-4 table-responsive">
      <div className="bg-primary text-white text-center py-1">
        <h4>Muscle Gain Workout Plan</h4>
      </div>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark table-dark">
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Exercise</th>
            <th scope="col">Body Part</th>
            <th scope="col">Reps/Sets</th>
          </tr>
        </thead>
        <tbody>
          {workoutPlan.map((dayPlan, index) => (
            <React.Fragment key={index}>
              <tr>
                <td
                  rowSpan={dayPlan.exercises.length + 1}
                  style={{ fontWeight: "bold" }}
                >
                  {dayPlan.day}
                </td>
              </tr>
              {dayPlan.exercises.map((exercise, idx) => (
                <tr key={idx}>
                  <td>{exercise.exercise}</td>
                  <td>{exercise.bodyPart}</td>
                  <td>{exercise.repsSets}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MuscleGainWorkoutPlan;
