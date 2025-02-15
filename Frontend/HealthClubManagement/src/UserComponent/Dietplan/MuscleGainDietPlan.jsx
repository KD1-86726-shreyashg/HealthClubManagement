import React from "react";

function MuscleGainDietPlan() {
  const dietPlan = [
    {
      meal: "Breakfast",
      time: "7:30 AM",
      food: "Scrambled eggs, whole-grain toast",
      quantity: "4 eggs, 2 slices",
      calories: "400",
    },
    {
      meal: "Snack",
      time: "10:00 AM",
      food: "Banana, peanut butter",
      quantity: "1 banana, 2 tbsp",
      calories: "250",
    },
    {
      meal: "Lunch",
      time: "1:00 PM",
      food: "Grilled chicken, brown rice, broccoli",
      quantity: "200g chicken, 1 cup rice, 1 cup",
      calories: "500",
    },
    {
      meal: "Snack",
      time: "4:00 PM",
      food: "Greek yogurt, mixed nuts",
      quantity: "200g yogurt, 30g nuts",
      calories: "300",
    },
    {
      meal: "Dinner",
      time: "7:30 PM",
      food: "Salmon, sweet potato, spinach",
      quantity: "200g salmon, 1 medium potato, 1 cup",
      calories: "450",
    },
    {
      meal: "Post-Workout",
      time: "9:00 PM",
      food: "Whey protein shake, almond milk",
      quantity: "1 scoop, 250ml",
      calories: "200",
    },
  ];

  return (
    <div className="container my-4 table-responsive">
      <div className="bg-primary text-white text-center py-1">
        <h4>Muscle Gain Diet Plan</h4>
      </div>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark table-dark">
          <tr>
            <th scope="col">Meal</th>
            <th scope="col">Time</th>
            <th scope="col">Food</th>
            <th scope="col">Quantity</th>
            <th scope="col">Calories</th>
          </tr>
        </thead>
        <tbody>
          {dietPlan.map((item, index) => (
            <tr key={index}>
              <td style={{ fontWeight: "bold" }}>{item.meal}</td>
              <td>{item.time}</td>
              <td>{item.food}</td>
              <td>{item.quantity}</td>
              <td>{item.calories}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MuscleGainDietPlan;
