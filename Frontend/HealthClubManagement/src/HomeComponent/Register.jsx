import React, { useState } from "react";
import { Card, Button, Row } from "react-bootstrap";
import UserRegister from "./UserRegister";
import TrainerRegister from "./TrainerRegister";

function Register() {
  const [userType, setUserType] = useState("user"); // Default to 'user'

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  return (
    <div>
      <Row>
        <div className="col-md-8 offset-4">
          <Button
            variant={userType === "user" ? "dark" : "secondary"} // Change button color when clicked
            onClick={() => handleUserTypeChange("user")}
            style={{
              marginLeft: "-104px",
              width: "318px",
              padding: "10px",
              marginTop: "15px",
            }}
          >
            User
          </Button>

          <Button
            variant={userType === "trainer" ? "dark" : "secondary"} // Change button color when clicked
            onClick={() => handleUserTypeChange("trainer")}
            style={{
              width: "318px",
              padding: "10px",
              marginTop: "15px",
            }}
          >
            Trainer
          </Button>
        </div>
      </Row>

      <Card>
        <Card.Body>
          {userType === "user" && <UserRegister />}
          {userType === "trainer" && <TrainerRegister />}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Register;
