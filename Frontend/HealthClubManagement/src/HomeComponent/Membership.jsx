import React from "react";

const Membership = () => {
  const pricingData = [
    {
      title: "Monthly",
      price: " ₹1000",
      features: [
        { text: "Personalized Workout Plans", available: true },
        { text: "24/7 Gym Access", available: true },
        { text: "One-on-One Trainer Sessions", available: false },
        { text: "Nutritional Guidance", available: false },
      ],
      headerStyle: { backgroundColor: "#28a745", color: "white" }, // Green header
      buttonStyle: {
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
      },
    },
    {
      title: "Quarterly",
      price: " ₹3000",
      features: [
        { text: "Access to Gym Equipment", available: true },
        { text: "Locker Facility", available: true },
        { text: "Group Fitness Classes", available: false },
        { text: "Sauna & Steam Room", available: false },
      ],
      headerStyle: { backgroundColor: "#fd7e14", color: "white" }, // Orange header
      buttonStyle: {
        backgroundColor: "#fd7e14",
        color: "white",
        border: "none",
      },
    },
    {
      title: " Half-Yearly",
      price: " ₹6000",
      features: [
        { text: "All Basic Membership Benefits", available: true },
        { text: "Personal Trainer Sessions", available: true },
        { text: "Diet & Nutrition Consultation", available: true },
      ],
      headerStyle: { backgroundColor: "#17a2b8", color: "white" }, // Blue header
      buttonStyle: {
        backgroundColor: "#17a2b8",
        color: "white",
        border: "none",
      },
    },
    {
      title: "Yearly",
      price: " ₹12000",
      features: [
        { text: "Unlimited Personal Training", available: true },
        { text: "Exclusive Workout Programs", available: true },
        { text: "Monthly Body Composition Analysis", available: false },
      ],
      headerStyle: { backgroundColor: "#6f42c1", color: "white" }, // Purple header
      buttonStyle: {
        backgroundColor: "#6f42c1",
        color: "white",
        border: "none",
      },
    },
  ];

  return (
    <div
      style={{ padding: "20px", backgroundColor: "#f8f9fa" }}
      id="memberShipList"
    >
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontWeight: "bold", color: "#343a40" }}>
          Membership Plans
        </h1>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {pricingData.map((card, index) => (
            <div
              className="col-md-3 mb-3 px-6"
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Adding effect here */}
              <div
                className="card text-center shadow-sm mb-4"
                style={{
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(255, 255, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="card-header text-center py-3"
                  style={card.headerStyle}
                >
                  <h3 style={{ margin: "0", fontSize: "1.5rem" }}>
                    {card.title}
                  </h3>
                </div>
                <div
                  className="card-body text-center"
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "350px",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        fontWeight: "bold",
                        color: "#343a40",
                        fontSize: "2rem",
                        marginBottom: "15px",
                      }}
                    >
                      {card.price}
                    </h2>
                    <p style={{ color: "#6c757d", fontSize: "0.9rem" }}>
                      Limited features you will get on this plan:
                    </p>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: "0",
                        margin: "0",
                        textAlign: "left",
                      }}
                    >
                      {card.features.map((feature, i) => (
                        <li
                          key={i}
                          style={{
                            marginBottom: "10px",
                            color: feature.available ? "#28a745" : "#dc3545",
                          }}
                        >
                          {feature.available ? "✔" : "✖"} {feature.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    style={{
                      ...card.buttonStyle,
                      padding: "10px 20px",
                      fontWeight: "bold",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;
