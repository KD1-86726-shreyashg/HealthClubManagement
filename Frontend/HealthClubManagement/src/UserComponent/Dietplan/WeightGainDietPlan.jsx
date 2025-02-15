import React from "react";

function WeightGainDietPlan() {
  const weightGainDietPlan = [
    {
      meal: "Breakfast",
      time: "7:30 AM",
      food: "Pancakes, maple syrup, scrambled eggs",
      quantity: "3 pancakes, 2 tbsp syrup, 3 eggs",
      calories: "600",
    },
    {
      meal: "Snack",
      time: "10:00 AM",
      food: "Whole milk, granola bar",
      quantity: "1 glass milk, 1 bar",
      calories: "350",
    },
    {
      meal: "Lunch",
      time: "1:00 PM",
      food: "Beef burger, sweet potato fries",
      quantity: "1 burger, 1 cup fries",
      calories: "700",
    },
    {
      meal: "Snack",
      time: "4:00 PM",
      food: "Cheese sandwich, orange juice",
      quantity: "2 slices bread, 1 slice cheese, 1 cup juice",
      calories: "400",
    },
    {
      meal: "Dinner",
      time: "7:30 PM",
      food: "Steak, mashed potatoes, peas",
      quantity: "200g steak, 1 cup potatoes, 1/2 cup peas",
      calories: "650",
    },
    {
      meal: "Dessert",
      time: "9:00 PM",
      food: "Ice cream",
      quantity: "1 scoop",
      calories: "200",
    },
    {
      meal: "Total",
      time: "-",
      food: "-",
      quantity: "-",
      calories: "2900",
    },
  ];

  return (
    <div className="container my-4 table-responsive">
      <div className="bg-primary text-white text-center py-1">
        <h4>Weight Gain Diet Plan</h4>
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
          {weightGainDietPlan.map((item, index) => (
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

export default WeightGainDietPlan;
