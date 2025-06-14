import './Home.css'
document.addEventListener("mousemove", (e) => {
  const cursor = { x: e.clientX, y: e.clientY };
  const cards = document.querySelectorAll(".mood-card");

  cards.forEach((card) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = {
      x: cardRect.left + cardRect.width / 2,
      y: cardRect.top + cardRect.height / 2,
    };

    const distance = Math.sqrt(
      Math.pow(cursor.x - cardCenter.x, 2) +
        Math.pow(cursor.y - cardCenter.y, 2)
    );

    if (distance < 200) {
      const tiltX = (cursor.y - cardCenter.y) / 20;
      const tiltY = (cardCenter.x - cursor.x) / 20;
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    } else {
      card.style.transform = "";
    }
  });
});

const Home = () => {
  return (
    <>
      <div className="content-spacer"></div>

      <div className="particles" id="particles"></div>

      <main className="main-content">
        <section className="mood-section">
          <h2 className="mood-title">How are you feeling today?</h2>
          <p className="mood-subtitle">
            Tell us your current mood and we'll curate the perfect movie
            selection just for you. Every recommendation is personalized to
            enhance your emotional experience.
          </p>

          <div className="mood-grid">
            <div className="mood-card happy">
              <span className="mood-emoji">😊</span>
              <h3 className="mood-name">Happy</h3>
              <p className="mood-description">
                Feeling great and want something uplifting
              </p>
            </div>

            <div className="mood-card sad">
              <span className="mood-emoji">😢</span>
              <h3 className="mood-name">Melancholic</h3>
              <p className="mood-description">
                In a reflective mood, seeking depth
              </p>
            </div>

            <div className="mood-card excited">
              <span className="mood-emoji">🤩</span>
              <h3 className="mood-name">Excited</h3>
              <p className="mood-description">
                High energy and ready for adventure
              </p>
            </div>

            <div className="mood-card calm">
              <span className="mood-emoji">😌</span>
              <h3 className="mood-name">Peaceful</h3>
              <p className="mood-description">
                Relaxed and wanting something soothing
              </p>
            </div>

            <div className="mood-card romantic">
              <span className="mood-emoji">💕</span>
              <h3 className="mood-name">Romantic</h3>
              <p className="mood-description">
                In the mood for love and connection
              </p>
            </div>

            <div className="mood-card adventurous">
              <span className="mood-emoji">🌟</span>
              <h3 className="mood-name">Adventurous</h3>
              <p className="mood-description">
                Seeking thrills and new experiences
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <button
            className="cta-button"
            onClick={() => {
              this.style.transform = "scale(0.95)";
              setTimeout(() => {
                this.style.transform = "";
              }, 150);
            }}
          >
            Start Your Journey
          </button>
        </section>

        <section className="features">
          <div className="feature">
            <div className="feature-icon">🎬</div>
            <h3 className="feature-title">Smart Recommendations</h3>
            <p className="feature-description">
              AI-powered suggestions based on your current emotional state
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">❤️</div>
            <h3 className="feature-title">Personal Favorites</h3>
            <p className="feature-description">
              Save movies you love and track your viewing journey
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">Mood Analytics</h3>
            <p className="feature-description">
              Discover patterns in your emotional viewing habits
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
