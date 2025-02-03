import React from "react";

const Schedule = () => {
  const schedule = [
    {
      time: "6.00am - 7.00am",
      days: [
        { day: "Monday", activity: "Yoga", trainer: "RLefew D. Loee" },
        { day: "Tuesday", activity: "", trainer: "" },
        { day: "Wednesday", activity: "Abs-Blast", trainer: "Keaf Shen" },
        { day: "Thursday", activity: "", trainer: "" },
        { day: "Friday", activity: "CrossFit", trainer: "Manish Karne" },
        { day: "Saturday", activity: "", trainer: "" },
      ],
    },
    {
      time: "10.00am - 11.00pm",
      days: [
        { day: "Monday", activity: "", trainer: "" },
        { day: "Tuesday", activity: "Zumba", trainer: "Kimberly Stone" },
        { day: "Wednesday", activity: "", trainer: "" },
        { day: "Thursday", activity: "Cardio", trainer: "RLefew D. Loee" },
        { day: "Friday", activity: "", trainer: "" },
        { day: "Saturday", activity: "Karate", trainer: "Donald Grey" },
      ],
    },
    {
      time: "5.00pm - 6.00pm",
      days: [
        { day: "Monday", activity: "Yoga", trainer: "RLefew D. Loee" },
        { day: "Tuesday", activity: "", trainer: "" },
        { day: "Wednesday", activity: "Abs-Blast", trainer: "Keaf Shen" },
        { day: "Thursday", activity: "", trainer: "" },
        { day: "Friday", activity: "CrossFit", trainer: "Manish Karne" },
        { day: "Saturday", activity: "", trainer: "" },
      ],
    },
    {
      time: "7.00pm - 8.00pm",
      days: [
        { day: "Monday", activity: "", trainer: "" },
        { day: "Tuesday", activity: "Zumba", trainer: "Kimberly Stone" },
        { day: "Wednesday", activity: "", trainer: "" },
        { day: "Thursday", activity: "Cardio", trainer: "RLefew D. Loee" },
        { day: "Friday", activity: "", trainer: "" },
        { day: "Saturday", activity: "Karate", trainer: "Donald Grey" },
      ],
    },
  ];

  return (
    <div className="container mt-5" style={{ backgroundColor: "#f4f4f4", color: "#333", padding: "20px", borderRadius: "8px" }}>
      <h2 className="text-center mb-1" style={{ fontWeight: "bold", fontSize: "2.5rem", color: "#ff6347" }}>Schedule</h2>
      <p className="text-center mb-3" style={{ color: "#ffa500" }}>Join The Batches!</p>
      <div className="table-responsive">
        <table className="table table-bordered text-center" style={{ backgroundColor: "#333", color: "#fff" }}>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#ff6347", color: "#fff" }}>Time</th>
              <th style={{ backgroundColor: "#ff6347", color: "#fff" }}>Monday</th>
              <th style={{ backgroundColor: "#ff6347", color: "#fff" }}>Tuesday</th>
              <th style={{ backgroundColor: "#ff6347", color: "#fff" }}>Wednesday</th>
              <th style={{ backgroundColor: "#ff6347", color: "#fff" }}>Thursday</th>
              <th style={{ backgroundColor: "#ff6347", color: "#fff" }}>Friday</th>
              <th style={{ backgroundColor: "#ff6347", color: "#fff" }}>Saturday</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row, rowIndex) => (
              <tr key={rowIndex} className="table-row">
                <td className="align-middle" style={{ backgroundColor: "#444", fontWeight: "bold", fontSize: "1.2rem", color: "#fff" }}>
                  {row.time}
                </td>
                {row.days.map((day, dayIndex) => (
                  <td
                    key={dayIndex}
                    className={`position-relative ${day.activity ? "bg-orange" : "bg-dark"}`}
                    style={{
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      color: day.activity ? "#000" : "gray",
                    }}
                  >
                    <strong>{day.activity}</strong>
                    <br />
                    <small>{day.trainer}</small>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Internal CSS for table hover effect */}
      <style>
        {`
          /* Hover effect for table headers */
          .table th:hover {
            background-color: #ffa500 !important;
            color: #000;
          }

          /* Hover effect for the rows */
          .table tbody tr:hover {
            background-color: #555 !important;
          }

          /* Hover effect for the table cells */
          .table tbody tr td:hover {
            background-color: #ffa500 !important;
            color: #000; /* Text color change on hover */
          }

          /* Hover effect for individual cell data */
          .table tbody tr td strong:hover {
            color: #000; /* Bold text color change on hover */
          }

          .table tbody tr td small:hover {
            color: #000; /* Small text color change on hover */
          }

          /* Smooth transition for background-color and text color */
          .table tbody tr td, .table th {
            transition: background-color 0.3s ease, color 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};

export default Schedule;
