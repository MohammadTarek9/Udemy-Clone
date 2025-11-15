const Skills = () => {
  const [activeCategory, setActiveCategory] = React.useState('trending');

  const getSkillsByCategory = (category) => {
    switch(category) {
      case 'trending':
        return skillsData.topSkills.filter(skill => skill.category === 'trending');
      case 'development':
        return skillsData.topSkills.filter(skill => skill.category === 'development');
      case 'business':
        return skillsData.categories.find(cat => cat.name === 'Business')?.skills || [];
      case 'design':
        return skillsData.categories.find(cat => cat.name === 'Design')?.skills || [];
      default:
        return skillsData.topSkills.slice(0, 8);
    }
  };

  return (
    <section className="skills-section">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">{skillsData.heading}</h2>
          <p className="section-subtitle">{skillsData.subHeading}</p>
        </div>

        <div className="skills-categories">
          <button 
            className={`category-tab ${activeCategory === 'trending' ? 'active' : ''}`}
            onClick={() => setActiveCategory('trending')}
          >
            Trending
          </button>
          <button 
            className={`category-tab ${activeCategory === 'development' ? 'active' : ''}`}
            onClick={() => setActiveCategory('development')}
          >
            Development
          </button>
          <button 
            className={`category-tab ${activeCategory === 'business' ? 'active' : ''}`}
            onClick={() => setActiveCategory('business')}
          >
            Business
          </button>
          <button 
            className={`category-tab ${activeCategory === 'design' ? 'active' : ''}`}
            onClick={() => setActiveCategory('design')}
          >
            Design
          </button>
        </div>

        <div className="skills-grid">
          {getSkillsByCategory(activeCategory).map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-learners">{skill.learners} learners</p>
              </div>
              <div className="skill-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-showcase">
          <div className="showcase-item">
            <div className="showcase-icon">
              <i className="fas fa-robot"></i>
            </div>
            <div className="showcase-content">
              <h3>ChatGPT is a top skill</h3>
              <p>See ChatGPT courses</p>
              <span className="learner-count">5,206,819 learners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};