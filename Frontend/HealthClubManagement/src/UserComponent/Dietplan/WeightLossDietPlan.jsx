import React from "react";

function WeightLossDietPlan() {
  const dietPlan = [
    {
      meal: "Breakfast",
      time: "7:30 AM",
      food: "Oats, almond milk, blueberries",
      quantity: "1/2 cup oats, 1/2 cup milk, 1/4 cup berries",
      calories: "200",
    },
    {
      meal: "Snack",
      time: "10:00 AM",
      food: "Boiled egg, cucumber slices",
      quantity: "1 egg, 1/2 cucumber",
      calories: "100",
    },
    {
      meal: "Lunch",
      time: "1:00 PM",
      food: "Grilled chicken, salad, olive oil dressing",
      quantity: "100g chicken, 2 cups salad, 1 tsp oil",
      calories: "300",
    },
    {
      meal: "Snack",
      time: "4:00 PM",
      food: "Handful of almonds",
      quantity: "15 almonds",
      calories: "100",
    },
    {
      meal: "Dinner",
      time: "7:30 PM",
      food: "Steamed fish, zucchini noodles",
      quantity: "100g fish, 1 cup noodles",
      calories: "250",
    },
    {
      meal: "Total",
      time: "-",
      food: "-",
      quantity: "-",
      calories: "950",
    },
  ];

  return (
    <div className="container my-4 table-responsive">
      <div className="bg-primary text-white text-center py-1">
        <h4>Weight Loss Diet Plan</h4>
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

export default WeightLossDietPlan;
