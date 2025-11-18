const AIEra = () => {
  return (
    <section className="ai-era">
      <div className="container">
        <div className="ai-era-content">
          <div className="ai-era-text">
            <h2 className="ai-era-title">Reimagine your career in the AI era</h2>
            <p className="ai-era-subtitle">
              Future-proof your skills with Personal Plan. Get access to a variety of 
              fresh content from real-world experts.
            </p>
            
            <div className="ai-era-features">
              <div className="ai-era-features-row">
                <div className="ai-feature">
                  <i className="fas fa-plus-circle"></i>
                  <span>Learn AI and more</span>
                </div>
                <div className="ai-feature">
                  <i className="fas fa-certificate"></i>
                  <span>Prep for a certification</span>
                </div>
              </div>
              <div className="ai-era-features-row">
                <div className="ai-feature">
                  <i className="fas fa-user-graduate"></i>
                  <span>Practice with AI coaching</span>
                </div>
                <div className="ai-feature">
                  <i className="fas fa-arrow-up"></i>
                  <span>Advance your career</span>
                </div>
              </div>
            </div>

            <div className="ai-era-cta">
              <button className="ai-era-btn">Learn more</button>
              <div className="ai-era-pricing">
                <span>Starting at E£204.00/month</span>
              </div>
            </div>
          </div>

          <div className="ai-era-visual">
            <div className="ai-era-background">
              <div className="ai-era-gradient"></div>
            </div>
            <div className="ai-era-person">
              <img 
                src="https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@2x.webp" 
                alt="Professional using AI tools"
                className="ai-person-image"
              />
            </div>
            <div className="ai-era-icons">
              <div className="ai-icon ai-icon-1">
                <div className="ai-icon-star"></div>
              </div>
              <div className="ai-icon ai-icon-2">
                <div className="ai-icon-vr"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};