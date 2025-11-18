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
          <div className="hero-card">
            <div className="hero-text">
              <h1 className="hero-title">
                {currentOffer === 0 ? heroData.mainHeading : heroData.alternativeOffer.title}
              </h1>
              <p className="hero-subtitle">
                {currentOffer === 0 ? heroData.subHeading : heroData.alternativeOffer.description}
              </p>
              <button className="hero-cta-btn">
                {currentOffer === 0 ? heroData.ctaButton : heroData.alternativeOffer.ctaButton}
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            {currentOffer === 0 ? (
              <img 
                src="https://img-c.udemycdn.com/notices/home_carousel_slide/image/4ea0e369-e5a2-4a86-b616-2fc2312a8efd.png" 
                alt="Jump into learning for less"
                className="hero-main-image"
              />
            ) : (
              <img 
                src="https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@2x.webp" 
                alt="AI Career transformation"
                className="hero-main-image"
              />
            )}
          </div>
        </div>

        {/* Navigation arrows */}
        <button className="hero-nav hero-nav-prev">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="hero-nav hero-nav-next">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};