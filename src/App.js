import React, { useState } from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { LoginContext } from "./Contexts/LoginContext";

const App = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <div className="App">
      <LoginContext.Provider value={{ userName, setUserName, setShowProfile }}>{showProfile ? <Profile /> : <Login />}</LoginContext.Provider>
    </div>
  );
};

export default App;
