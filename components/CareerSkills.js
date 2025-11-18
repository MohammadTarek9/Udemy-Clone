const CareerSkills = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const careerSkillsData = {
    heading: "Learn essential career and life skills",
    subheading: "Udemy helps you build in-demand skills fast and advance your career in a changing job market.",
    skills: [
      {
        id: 1,
        title: "Generative AI",
        learners: "1.7M+",
        image: "https://cms-images.udemycdn.com/96883mtakkm8/9Gj6y7OdRKhBmHkgJ9lWV/4589dcd6feb8009798924f70f515b731/generative-ai.png",
        backgroundColor: "#f4f1e8",
        link: "https://www.udemy.com/topic/generative-ai/"
      },
      {
        id: 2,
        title: "IT Certifications", 
        learners: "14M+",
        image: "https://cms-images.udemycdn.com/96883mtakkm8/5Pyb4XbnD2CBt6TgiSBB8v/26f6893300dadc86519907b854b430de/certifications.png",
        backgroundColor: "#4a90a4",
        link: "https://www.udemy.com/courses/it-and-software/it-certification/"
      },
      {
        id: 3,
        title: "Data Science",
        learners: "8.1M+", 
        image: "https://cms-images.udemycdn.com/96883mtakkm8/6QeCzvTvnqKN6tI18U0Wmg/cebc19b24d374ec1cab549a9c7a93020/data-science.png",
        backgroundColor: "#e8e2f0",
        link: "https://www.udemy.com/topic/data-science/"
      }
    ]
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % Math.max(1, careerSkillsData.skills.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + Math.max(1, careerSkillsData.skills.length - 2)) % Math.max(1, careerSkillsData.skills.length - 2));
  };

  return (
    <section className="career-skills">
      <div className="container">
        <div className="career-skills-content">
          <div className="career-skills-text">
            <h2 className="career-skills-title">{careerSkillsData.heading}</h2>
            <p className="career-skills-subtitle">{careerSkillsData.subheading}</p>
          </div>

          <div className="career-skills-carousel">
            <div className="skills-grid">
              {careerSkillsData.skills.map((skill, index) => (
                <div key={skill.id} className="skill-card-large" style={{backgroundColor: skill.backgroundColor}}>
                  <div className="skill-card-image">
                    <img src={skill.image} alt={skill.title} />
                  </div>
                  <div className="skill-card-content">
                    <div className="skill-learners-count">
                      <i className="fas fa-users"></i>
                      <span>{skill.learners}</span>
                    </div>
                    <h3 className="skill-card-title">{skill.title}</h3>
                    <div className="skill-card-arrow">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-navigation">
              <button className="carousel-nav carousel-nav-prev" onClick={prevSlide}>
                <i className="fas fa-chevron-left"></i>
              </button>
              
              <div className="carousel-indicators">
                {[...Array(3)].map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>

              <button className="carousel-nav carousel-nav-next" onClick={nextSlide}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};