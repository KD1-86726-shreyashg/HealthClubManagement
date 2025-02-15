import React, { useState } from "react";

const TrainerCards = () => {
  const cardData = [
    {
      id: 1,
      image: "/assets/trainersImages/team-3.jpg",
      name: "Manish",
      experience:"10 years",
      description: "Manish is a highly experienced and engaging trainer with a passion for adult learning. He specializes in leadership development,  combines interactive exercises,communication skills, and team building. ",
    },
    {
      id: 2,
      image: "/assets/trainersImages/team-5.jpg", // New image
      name: "Maria",
      experience:"7 years",
      description: " Maria is a certified mindfulness and stress management trainer with a background in psychology. She specializes in helping individuals and improve their focus and productivity.",
    },
    {
      id: 3,
      image: "/assets/trainersImages/team-2.jpg",
      name: "Shreyash",
      experience:"6 years",
      description: "Shreyash is a results-oriented trainer with a strong background in customer service and sales. He is passionate about helping individuals.Shreyash's training is practical, engaging.",
    },
    {
      id: 4,
      image: "/assets/trainersImages/team-1.jpg", // New image
      name: "Neha",
      experience:"4 years",
      description: "Neha is an energetic and enthusiastic trainer specializing in presentation skills and public speaking. She is passionate about helping individuals to develop confidence, and deliver impactful presentations.",
    },
    {
      id: 5,
      image: "/assets/Home1.jpg",
      name: "Samadhan",
      experience:"12 years",
      description: "Sam is a skilled trainer with a focus on technical and software training. She excels at breaking down complex topics into easily digestible modules.Sam is patient, knowledgeable.",
    },
    {
      id: 6,
      image: "/assets/trainersImages/team-6.jpeg",
      name: "Shweta",
      experience:"3.5 years",
      description: "Shweta is a highly experienced trainer with expertise in diversity and inclusion. She has a deep understanding of cultural competence, unconscious bias, and inclusive leadership.she is an energetic and enthusiastic trainer.",
    }

    // More cards can be added here
  ];

  const [visibleCards, setVisibleCards] = useState(cardData.slice(0, 3)); // Initially show the first 3 cards
  const [startIndex, setStartIndex] = useState(0); // To track the starting index of the visible cards

  // Go to the first page (first 3 cards)
  const handleFirst = () => {
    setStartIndex(0);
  };

  // Go to the last page (the last 3 cards)
  const handleLast = () => {
    const lastIndex = Math.max(cardData.length - 3, 0); // Ensure we don't go beyond the array length
    setStartIndex(lastIndex);
  };

  // Go to the next set of cards (slide right)
  const handleNext = () => {
    if (startIndex + 3 < cardData.length) {
      setStartIndex((prevIndex) => prevIndex + 1); // Move to the next set of 3 cards
    }
  };

  // Go to the previous set of cards (slide left)
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1); // Move to the previous set of 3 cards
    }
  };

  // Update visibleCards based on the startIndex
  React.useEffect(() => {
    setVisibleCards(cardData.slice(startIndex, startIndex + 3));
  }, [startIndex]);

  return (
    <>
      <div style={{ background: "#0c0c0c", borderTop: "1px solid white", padding:"10px" }}>
        <h1 className="text-center text-light">Our Trainers</h1>
        <div className="container my-4">
          <div className="row justify-content-center align-items-center">
            {/* Previous Button */}
            {startIndex > 0 && (
              <button
                className="btn btn-outline-light mx-2 col-1 rounded-circle"
                onClick={handlePrev}
                style={{
                  position: "absolute",
                  left: 20,
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                &lt;
              </button>
            )}

            {/* Cards */}
            {visibleCards.map((card) => (
              <div className="col-md-4" key={card.id}>
              <div
                className="card text-center shadow-sm mb-4"
                style={{
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 255, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                  <div className="card-body">
                    <div className="d-flex justify-content-center mb-3">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="rounded-circle"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <h5 className="card-name" style={{fontFamily: "Arial, Helvetica, sans-serif", color:"#064972"}}><strong>{card.name}</strong></h5>
                    <p className="card-text">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Next Button */}
            {startIndex + 3 < cardData.length && (
              <button
                className="btn btn-outline-light mx-2 col-1 rounded-circle"
                onClick={handleNext}
                style={{
                  position: "absolute",
                  right: 20,
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                &gt; {/* Right arrow button */}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerCards;
