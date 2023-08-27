import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { LoginContext } from "../Contexts/LoginContext";

const Profile = () => {
  const { userName } = useContext(LoginContext);
  return (
    <div className="d-flex justify-content-center mt-5">
      <Card className="px-3 py-3">
        <div className="d-flex justify-content-center">
          <h1>Profile</h1>
        </div>
        <h2>Username: {userName} </h2>
      </Card>
    </div>
  );
};

export default Profile;
