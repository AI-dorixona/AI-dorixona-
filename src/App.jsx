import React, { useState } from "react";
import Login from "./pages/Login";
import AiDorixonaBanner from "./Carusel";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return isLoggedIn ? <AiDorixonaBanner /> : <Login onLogin={handleLogin} />;
};

export default App;
