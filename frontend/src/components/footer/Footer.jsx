import { useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    const subscribeBtn = document.getElementById("subscribeBtn");
    const newsletterEmail = document.getElementById("newsletterEmail");

    const handleSubscribe = () => {
      const email = newsletterEmail.value.trim();
      if (email && email.includes("@")) {
        console.log("Subscribing email:", email);

        subscribeBtn.innerHTML = "<span>✓ Subscribed!</span>";
        subscribeBtn.style.background = "#10b981";

        setTimeout(() => {
          subscribeBtn.innerHTML = "<span>Subscribe</span>";
          subscribeBtn.style.background = "";
          newsletterEmail.value = "";
        }, 2000);
      } else {
        newsletterEmail.style.borderColor = "#ef4444";
        newsletterEmail.style.boxShadow = "0 0 0 3px rgba(239, 68, 68, 0.2)";

        setTimeout(() => {
          newsletterEmail.style.borderColor = "";
          newsletterEmail.style.boxShadow = "";
        }, 2000);
      }
    };

    const handleEnterPress = (e) => {
      if (e.key === "Enter") {
        subscribeBtn.click();
      }
    };

    const handleLinkClick = (e) => {
      e.preventDefault();
      console.log("Footer link clicked:", e.currentTarget.textContent);
    };

    const handleSocialClick = (e) => {
      e.preventDefault();
      console.log("Social link clicked:", e.currentTarget.getAttribute("aria-label"));
    };

    const footerLinks = document.querySelectorAll(".footer-link, .footer-bottom-link");
    const socialLinks = document.querySelectorAll(".social-link");

    subscribeBtn.addEventListener("click", handleSubscribe);
    newsletterEmail.addEventListener("keypress", handleEnterPress);
    socialLinks.forEach((link) => link.addEventListener("click", handleSocialClick));
    footerLinks.forEach((link) => link.addEventListener("click", handleLinkClick));

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".footer-section, .footer-brand");
    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(20px)";
      section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(section);
    });

    return () => {
      subscribeBtn.removeEventListener("click", handleSubscribe);
      newsletterEmail.removeEventListener("keypress", handleEnterPress);
      socialLinks.forEach((link) => link.removeEventListener("click", handleSocialClick));
      footerLinks.forEach((link) => link.removeEventListener("click", handleLinkClick));
    };
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#" className="footer-logo">
                <div className="footer-logo-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2L3.09 8.26L12 22L20.91 8.26L12 2ZM12 4.44L18.18 9.5L12 19.5L5.82 9.5L12 4.44Z" />
                  </svg>
                </div>
                <span className="footer-logo-text">moodSinema</span>
              </a>
              <p className="footer-description">
                Discover the perfect movie for every mood. Our AI-powered recommendation engine curates personalized film experiences tailored to your emotional state.
              </p>
              <div className="footer-social">
                {["Twitter", "Instagram", "Facebook", "YouTube"].map((label, i) => (
                  <a href="#" className="social-link" aria-label={label} key={i}>
                    {/* Add appropriate SVGs for each label if needed */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Discover</h3>
              <div className="footer-links">
                <a href="#" className="footer-link">Popular Movies</a>
                <a href="#" className="footer-link">New Releases</a>
                <a href="#" className="footer-link">Top Rated</a>
                <a href="#" className="footer-link">Mood Categories</a>
                <a href="#" className="footer-link">Watchlist</a>
              </div>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Genres</h3>
              <div className="footer-links">
                <a href="#" className="footer-link">Action</a>
                <a href="#" className="footer-link">Comedy</a>
                <a href="#" className="footer-link">Drama</a>
                <a href="#" className="footer-link">Romance</a>
                <a href="#" className="footer-link">Thriller</a>
              </div>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Support</h3>
              <div className="footer-links">
                <a href="#" className="footer-link">Help Center</a>
                <a href="#" className="footer-link">Contact Us</a>
                <a href="#" className="footer-link">FAQ</a>
                <a href="#" className="footer-link">Feedback</a>
                <a href="#" className="footer-link">Bug Report</a>
              </div>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Stay Updated</h3>
              <div className="newsletter">
                <p className="newsletter-text">
                  Get movie recommendations delivered to your inbox
                </p>
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email"
                  id="newsletterEmail"
                />
                <button className="newsletter-btn" id="subscribeBtn">
                  <span>Subscribe</span>
                </button>
                <div className="mood-indicator">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                  <span>Mood-based picks</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              <p>&copy; 2025 moodSinema. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms of Service</a>
              <a href="#" className="footer-bottom-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
