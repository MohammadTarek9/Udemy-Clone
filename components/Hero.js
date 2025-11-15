const Hero = () => {
  const [currentOffer, setCurrentOffer] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer(prev => prev === 0 ? 1 : 0);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            {currentOffer === 0 ? (
              <div className="hero-offer">
                <h1 className="hero-title">{heroData.mainHeading}</h1>
                <p className="hero-subtitle">{heroData.subHeading}</p>
                <button className="hero-cta-btn primary-btn">
                  {heroData.ctaButton}
                </button>
              </div>
            ) : (
              <div className="hero-offer">
                <h1 className="hero-title">{heroData.alternativeOffer.title}</h1>
                <p className="hero-subtitle">{heroData.alternativeOffer.description}</p>
                <button className="hero-cta-btn primary-btn">
                  {heroData.alternativeOffer.ctaButton}
                </button>
              </div>
            )}
          </div>
          
          <div className="hero-image">
            <div className="hero-image-container">
              {currentOffer === 0 ? (
                <img 
                  src="https://img-c.udemycdn.com/notices/home_carousel_slide/image/4ea0e369-e5a2-4a86-b616-2fc2312a8efd.png" 
                  alt="Jump into learning for less"
                  className="hero-main-image"
                />
              ) : (
                <div className="hero-video-placeholder">
                  <div className="video-thumbnail">
                    <div className="play-button">
                      <i className="fas fa-play"></i>
                    </div>
                    <img 
                      src="https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@2x.webp" 
                      alt="AI Career transformation"
                      className="thumbnail-img"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};