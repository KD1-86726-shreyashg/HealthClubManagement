import React from "react";

function VeganDietPlan() {
  const veganDietPlan = [
    {
      meal: "Breakfast",
      time: "7:30 AM",
      food: "Chia pudding, almond milk, banana",
      quantity: "1/2 cup chia pudding, 1/2 banana",
      calories: "300",
    },
    {
      meal: "Snack",
      time: "10:00 AM",
      food: "Handful of walnuts, apple",
      quantity: "30g walnuts, 1 apple",
      calories: "200",
    },
    {
      meal: "Lunch",
      time: "1:00 PM",
      food: "Lentil curry, brown rice",
      quantity: "1 cup curry, 1 cup rice",
      calories: "400",
    },
    {
      meal: "Snack",
      time: "4:00 PM",
      food: "Smoothie (spinach, mango, plant-based protein)",
      quantity: "1 glass",
      calories: "250",
    },
    {
      meal: "Dinner",
      time: "7:30 PM",
      food: "Tofu stir-fry with vegetables",
      quantity: "150g tofu, 2 cups vegetables",
      calories: "350",
    },
    {
      meal: "Total",
      time: "-",
      food: "-",
      quantity: "-",
      calories: "1500",
    },
  ];

  return (
    <div className="container my-4 table-responsive">
      <div className="bg-primary text-white text-center py-1">
        <h4>Vegan Diet Plan</h4>
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
          {veganDietPlan.map((item, index) => (
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

export default VeganDietPlan;
