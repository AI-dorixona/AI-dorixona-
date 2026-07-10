import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import AiDorixonaBanner from "./Carusel";
import Medicines from "./pages/Medicines";
import Sidebar from "./Sidebar";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth > 768 && window.innerWidth <= 1024
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage("home");
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
  };

  return isLoggedIn ? (
    <div className="app-container" style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar onLogout={handleLogout} onNavigate={handleNavigate} />
      <div
        className="main-content"
        style={{
          marginLeft: isMobile ? 0 : isTablet ? 80 : 80,
          flex: 1,
          transition: "margin-left 0.3s ease",
          paddingTop: isMobile ? 60 : 0,
          width: "100%",
          overflowX: "hidden",
        }}
      >
        {currentPage === "home" && <AiDorixonaBanner />}
        {currentPage === "medicines" && <Medicines onBack={handleBackToHome} />}
      </div>
    </div>
  ) : (
    <Login onLogin={handleLogin} />
  );
};

export default App;
