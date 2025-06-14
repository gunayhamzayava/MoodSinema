import React, { useEffect } from "react";
import "./MoodAnalytics.css";

const moods = [
  { emoji: "😊", label: "Happy", desc: "Ready for uplifting adventures" },
  { emoji: "😌", label: "Peaceful", desc: "In the mood for calm stories" },
  { emoji: "🤔", label: "Thoughtful", desc: "Seeking meaningful narratives" },
  { emoji: "😆", label: "Playful", desc: "Looking for fun and laughter" },
];

let currentMoodIndex = 0;

const MoodAnalytics = () => {
  useEffect(() => {
    const progressBars = document.querySelectorAll(".genre-progress");
    setTimeout(() => {
      progressBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = "0%";
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
    }, 500);

    const cards = document.querySelectorAll(".movie-card");
    cards.forEach((card) => {
      card.addEventListener("click", function () {
        const title = this.querySelector(".movie-title").textContent;
        console.log("Movie selected:", title);
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
          this.style.transform = "";
        }, 150);
      });
    });

    const moodInterval = setInterval(() => {
      const moodEmoji = document.querySelector(".mood-emoji");
      const moodLabel = document.querySelector(".mood-label");
      const moodDescription = document.querySelector(".mood-description");

      currentMoodIndex = (currentMoodIndex + 1) % moods.length;
      const mood = moods[currentMoodIndex];

      if (moodEmoji) moodEmoji.textContent = mood.emoji;
      if (moodLabel) moodLabel.textContent = mood.label;
      if (moodDescription) moodDescription.textContent = mood.desc;
    }, 10000);

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

    document
      .querySelectorAll(
        ".insight-card, .mood-timeline, .mood-summary, .recommendations"
      )
      .forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(card);
      });

    return () => clearInterval(moodInterval);
  }, []);

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Mood Analytics</h1>
        <p className="page-subtitle">
          Discover patterns in your emotional viewing habits and get insights
          into your cinematic journey.
        </p>
      </div>

      <div className="analytics-grid">
        <div className="mood-timeline">
          <h2 className="card-title">
            <div className="card-icon">📈</div>Your Mood Journey
          </h2>
          <div className="timeline-chart">
            <div className="chart-line"></div>
            <div className="chart-overlay">Last 30 days</div>
          </div>
          <p>
            Your emotional patterns show you prefer uplifting content during
            weekends and introspective films on weekdays.
          </p>
        </div>

        <div className="mood-summary">
          <h2 className="card-title">
            <div className="card-icon">🎭</div>Current State
          </h2>
          <div className="current-mood">
            <span className="mood-emoji-analytics">😊</span>
            <div className="mood-label">Happy</div>
            <div className="mood-description">
              Ready for uplifting adventures
            </div>
          </div>
          <div className="mood-stats">
            <div className="stat-item">
              <span>Most Common Mood</span>
              <span className="stat-value">Relaxed (35%)</span>
            </div>
            <div className="stat-item">
              <span>Movies Watched</span>
              <span className="stat-value">127</span>
            </div>
            <div className="stat-item">
              <span>Mood Accuracy</span>
              <span className="stat-value">94%</span>
            </div>
            <div className="stat-item">
              <span>Current Streak</span>
              <span className="stat-value">12 days</span>
            </div>
          </div>
        </div>
      </div>

      <div className="insights-grid">
        {/* Genre Preferences */}
        <div className="insight-card">
          <h3 className="card-title">
            <div className="card-icon">🎬</div>Genre Preferences
          </h3>
          <div className="genre-list">
            {[
              { name: "Comedy", width: 85, color: ["#667eea", "#764ba2"] },
              { name: "Drama", width: 72, color: ["#f48fb1", "#ff6b9d"] },
              { name: "Action", width: 68, color: ["#4ecdc4", "#44a08d"] },
              { name: "Romance", width: 45, color: ["#ffeaa7", "#fdcb6e"] },
            ].map((genre) => (
              <div className="genre-item" key={genre.name}>
                <span>{genre.name}</span>
                <div className="genre-bar">
                  <div
                    className="genre-progress"
                    style={{
                      width: `${genre.width}%`,
                      background: `linear-gradient(90deg, ${genre.color[0]}, ${genre.color[1]})`,
                    }}
                  ></div>
                </div>
                <span className="stat-value">{genre.width}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Viewing Patterns */}
        <div className="insight-card">
          <h3 className="card-title">
            <div className="card-icon">⏰</div>Viewing Patterns
          </h3>
          <div className="mood-stats">
            <div className="stat-item">
              <span>Peak Viewing Time</span>
              <span className="stat-value">8-10 PM</span>
            </div>
            <div className="stat-item">
              <span>Favorite Day</span>
              <span className="stat-value">Saturday</span>
            </div>
            <div className="stat-item">
              <span>Average Duration</span>
              <span className="stat-value">2h 15m</span>
            </div>
            <div className="stat-item">
              <span>Binge Sessions</span>
              <span className="stat-value">23 this month</span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="insight-card">
          <h3 className="card-title">
            <div className="card-icon">🏆</div>Achievements
          </h3>
          <div className="mood-stats">
            <div className="stat-item">
              <span>🎭 Mood Explorer</span>
              <span className="stat-value">Unlocked</span>
            </div>
            <div className="stat-item">
              <span>🌟 Century Club</span>
              <span className="stat-value">127/100</span>
            </div>
            <div className="stat-item">
              <span>🔥 Streak Master</span>
              <span className="stat-value">12 days</span>
            </div>
            <div className="stat-item">
              <span>🎬 Genre Hopper</span>
              <span className="stat-value">8/10</span>
            </div>
          </div>
        </div>
      </div>

      <div className="recommendations">
        <h2 className="card-title">
          <div className="card-icon">💡</div>Mood-Based Recommendations
        </h2>
        <div className="movie-grid">
          {[
            {
              title: "The Grand Budapest Hotel",
              poster: "🎭",
              mood: "Perfect for your happy mood",
            },
            {
              title: "La La Land",
              poster: "🌟",
              mood: "Uplifting musical",
              color: "#f48fb1",
            },
            {
              title: "Guardians of the Galaxy",
              poster: "🚀",
              mood: "Fun adventure",
              color: "#4ecdc4",
            },
            {
              title: "The Princess Bride",
              poster: "💫",
              mood: "Feel-good classic",
              color: "#ffeaa7",
            },
          ].map((movie) => (
            <div className="movie-card" key={movie.title}>
              <div className="movie-poster">{movie.poster}</div>
              <div className="movie-info">
                <div className="movie-title">{movie.title}</div>
                <div className="movie-mood">
                  <div
                    className="mood-dot"
                    style={movie.color ? { background: movie.color } : {}}
                  ></div>
                  {movie.mood}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodAnalytics;
