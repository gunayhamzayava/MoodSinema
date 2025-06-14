import React, { useEffect, useRef } from "react";
import "./Header.css";

const Header = () => {
  const headerRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          headerRef.current.style.transform = "translateY(-100%)";
        } else {
          headerRef.current.style.transform = "translateY(0)";
        }
        lastScrollY = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Ripple effect for buttons
    const buttons = document.querySelectorAll(".btn");
    const handleClick = function (e) {
      e.preventDefault();

      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    buttons.forEach((btn) => btn.addEventListener("click", handleClick));
    return () =>
      buttons.forEach((btn) => btn.removeEventListener("click", handleClick));
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(2);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const query = e.target.value.trim();
      if (query) {
        console.log("Searching for:", query);
      }
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        <a href="#" className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 2L3.09 8.26L12 22L20.91 8.26L12 2ZM12 4.44L18.18 9.5L12 19.5L5.82 9.5L12 4.44Z" />
            </svg>
          </div>
          <span className="logo-text">moodSinema</span>
        </a>

        <div className="search-container">
          <svg className="search-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search movies by title, genre, or mood..."
            id="searchInput"
            ref={searchInputRef}
            onKeyPress={handleKeyPress}
          />
        </div>

        <div className="auth-buttons">
          <a href="#" className="btn btn-login">
            <span>Login</span>
          </a>
          <a href="#" className="btn btn-register">
            <span>Register</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
