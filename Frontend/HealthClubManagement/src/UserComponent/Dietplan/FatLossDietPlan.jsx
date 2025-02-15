import React from "react";

function FatLossDietPlan() {
  const dietPlan = [
    {
      meal: "Breakfast",
      time: "8:00 AM",
      food: "Egg whites, avocado toast",
      quantity: "5 egg whites, 1 slice",
      calories: "250",
    },
    {
      meal: "Snack",
      time: "10:30 AM",
      food: "Apple, almond butter",
      quantity: "1 apple, 1 tbsp",
      calories: "150",
    },
    {
      meal: "Lunch",
      time: "1:00 PM",
      food: "Grilled turkey, quinoa, green beans",
      quantity: "150g turkey, 1/2 cup quinoa, 1 cup",
      calories: "350",
    },
    {
      meal: "Snack",
      time: "3:30 PM",
      food: "Carrot sticks, hummus",
      quantity: "1 cup carrots, 2 tbsp",
      calories: "120",
    },
    {
      meal: "Dinner",
      time: "7:00 PM",
      food: "Grilled cod, asparagus, cauliflower mash",
      quantity: "150g cod, 1 cup asparagus, 1 cup mash",
      calories: "300",
    },
    {
      meal: "Total",
      time: "-",
      food: "-",
      quantity: "-",
      calories: "1,170",
    },
  ];

  return (
    <div className="container my-4 table-responsive">
      <div className="bg-primary text-white text-center py-1">
        <h4>Fat Loss Diet Plan</h4>
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

export default FatLossDietPlan;
