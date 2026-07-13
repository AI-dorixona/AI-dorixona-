import React, { useState, useEffect } from "react";
import "./App.css";

const Sidebar = ({ onLogout, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 1025);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth > 768 && window.innerWidth <= 1024
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width <= 768;
      const tablet = width > 768 && width <= 1024;
      const desktop = width >= 1025;

      setIsMobile(mobile);
      setIsTablet(tablet);

      if (mobile) {
        setIsOpen(false);
        setIsMobileOpen(false);
      } else if (tablet) {
        setIsOpen(false);
      } else if (desktop) {
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { id: 1, label: "Dashboard", icon: "📊", path: "home" },
    { id: 2, label: "Retseptlar", icon: "📝", path: "receipts" },
    { id: 3, label: "Buyurtmalar", icon: "🛒", path: "orders" },
    { id: 4, label: "Dorilar", icon: "💊", path: "medicines" },
    { id: 5, label: "Profil", icon: "👤", path: "profile" },
    { id: 6, label: "Sozlamalar", icon: "⚙️", path: "settings" },
  ];

  const handleMenuClick = (path) => {
    if (isMobile) {
      setIsMobileOpen(false);
    }
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const sidebarWidth = isMobile ? (isMobileOpen ? 250 : 0) : isOpen ? 250 : 80;

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="mobile-menu-button"
          style={{
            position: "fixed",
            top: 20,
            left: 20,
            zIndex: 1001,
            width: 44,
            height: 44,
            borderRadius: 8,
            background: "linear-gradient(135deg, #0B3D4D 0%, #0E5C6B 100%)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
          }}
        >
          ☰
        </button>
      )}

      {/* Mobile Backdrop */}
      {isMobile && isMobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsMobileOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 999,
          }}
        />
      )}

      {/* Sidebar */}
      <div
        className="sidebar-wrapper"
        style={{
          width: sidebarWidth,
          height: "100vh",
          padding: "20px 0",
          transition: "width 0.3s ease, transform 0.3s ease",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: isMobile ? 1000 : 100,
          boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div
          className="sidebar-header"
          style={{
            padding: "20px",
            textAlign: "center",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            marginBottom: 20,
          }}
        >
          <div className="sidebar-logo">AI</div>
          {(!isMobile && isOpen) || (isMobile && isMobileOpen) ? (
            <p className="sidebar-subtitle">Dorixona</p>
          ) : null}
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav" style={{ paddingBottom: 20 }}>
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleMenuClick(item.path)}
              className="sidebar-menu-item"
              style={{
                padding: "12px 20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 12,
                transition: "background 0.2s ease",
                color: "#fff",
                fontSize: 14,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <span className="sidebar-menu-icon" style={{ fontSize: 20 }}>
                {item.icon}
              </span>
              {(!isMobile && isOpen) || (isMobile && isMobileOpen) ? (
                <span>{item.label}</span>
              ) : null}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div
          className="sidebar-footer"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "20px",
            position: "absolute",
            bottom: 0,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* Toggle Button (Desktop only) */}
          {!isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sidebar-button sidebar-toggle-btn"
              style={{
                width: "100%",
                padding: "10px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                borderRadius: 8,
                cursor: "pointer",
                marginBottom: 10,
                fontSize: 12,
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
              }
            >
              {isOpen ? "<<" : ">>"}
            </button>
          )}

          {/* Logout Button */}
          <button
            onClick={onLogout}
            className="sidebar-button logout"
            style={{
              width: "100%",
              padding: "10px",
              background: "rgba(255,75,75,0.2)",
              border: "1px solid rgba(255,75,75,0.4)",
              color: "#fff",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 12,
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,75,75,0.3)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,75,75,0.2)")
            }
          >
            {(!isMobile && isOpen) || (isMobile && isMobileOpen)
              ? "Chiqish"
              : "🚪"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
