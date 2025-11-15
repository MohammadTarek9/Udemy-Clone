const TrustedCompanies = () => {
  return (
    <section className="trusted-companies">
      <div className="container">
        <div className="trusted-companies-content">
          <h2 className="section-title">{trustedCompaniesData.heading}</h2>
          
          <div className="companies-grid">
            {trustedCompaniesData.companies.map((company, index) => (
              <div key={index} className="company-logo-wrapper">
                <img 
                  src={company.logo} 
                  alt={company.alt}
                  className="company-logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          <div className="companies-stats">
            <div className="stat">
              <span className="stat-number">17,000+</span>
              <span className="stat-label">companies</span>
            </div>
            <div className="stat">
              <span className="stat-number">Millions</span>
              <span className="stat-label">of learners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};