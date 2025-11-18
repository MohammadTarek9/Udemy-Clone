const TrustedCompanies = () => {
  // Display only the first 8 companies for the horizontal layout
  const displayedCompanies = trustedCompaniesData.companies.slice(0, 8);

  return (
    <section className="trusted-companies">
      <div className="container">
        <div className="trusted-companies-content">
          <h2 className="trusted-companies-title">{trustedCompaniesData.heading}</h2>
          
          <div className="companies-horizontal-grid">
            {displayedCompanies.map((company, index) => (
              <div key={index} className="company-logo-item">
                <img 
                  src={company.logo} 
                  alt={company.alt}
                  className="company-logo-horizontal"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};