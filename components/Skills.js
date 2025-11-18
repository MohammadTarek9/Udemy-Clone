const Skills = () => {
  const [activeTab, setActiveTab] = React.useState('Artificial Intelligence (AI)');
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const skillTabs = [
    'Artificial Intelligence (AI)',
    'Python', 
    'Microsoft Excel',
    'AI Agents & Agentic AI',
    'Digital Marketing',
    'Amazon AWS'
  ];

  const aiCourses = [
    {
      id: 1,
      title: "The AI Engineer Course 2025: Complete AI Engineer Bootcamp",
      instructor: "365 Careers",
      rating: 4.6,
      reviewCount: 11661,
      price: 349.99,
      image: "https://img-c.udemycdn.com/course/750x422/6112535_7103.jpg",
      bestseller: true
    },
    {
      id: 2,
      title: "Intro to AI Agents and Agentic AI", 
      instructor: "365 Careers",
      rating: 4.4,
      reviewCount: 1647,
      price: 349.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XFgSGHfypqTV9B7xfWTo47D6Cunkl90I2g&s",
      bestseller: true
    },
    {
      id: 3,
      title: "The Complete Guide To AI Powered Salesforce Development",
      instructor: "Matt Gerry", 
      rating: 4.8,
      reviewCount: 84,
      price: 349.99,
      image: "data:image/jpeg;base64,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",
      bestseller: true
    },
    {
      id: 4,
      title: "Artificial Intelligence for Business + ChatGPT Prize [2025]",
      instructor: "Hadelin de Ponteves, Kirill Eremenko",
      rating: 4.4,
      reviewCount: 4856,
      price: 719.99,
      image: "data:image/jpeg;base64,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",
      premium: true
    }
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % Math.max(1, aiCourses.length - 3));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + Math.max(1, aiCourses.length - 3)) % Math.max(1, aiCourses.length - 3));
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="rating-stars">
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="fas fa-star"></i>
        ))}
        {hasHalfStar && <i className="fas fa-star-half-alt"></i>}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={`empty-${i}`} className="far fa-star"></i>
        ))}
      </div>
    );
  };

  return (
    <section className="skills-section">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">{skillsData.heading}</h2>
          <p className="section-subtitle">{skillsData.subHeading}</p>
        </div>

        <div className="skills-tabs">
          {skillTabs.map((tab, index) => (
            <button 
              key={index}
              className={`skill-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="skills-courses">
          <div className="courses-header-nav">
            <button 
              className="nav-btn prev-btn"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              className="nav-btn next-btn"
              onClick={nextSlide}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <div className="skills-courses-grid">
            {aiCourses.map(course => (
              <div key={course.id} className="skills-course-card">
                <div className="course-image">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="course-thumbnail"
                  />
                  {course.bestseller && (
                    <div className="bestseller-badge">Bestseller</div>
                  )}
                  {course.premium && (
                    <div className="premium-badge">Premium</div>
                  )}
                </div>
                
                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-instructor">{course.instructor}</p>
                  
                  <div className="course-rating">
                    <span className="rating-score">{course.rating}</span>
                    {renderStars(course.rating)}
                    <span className="rating-count">({course.reviewCount.toLocaleString()} ratings)</span>
                  </div>
                  
                  <div className="course-price">
                    <span className="current-price">E£{course.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="show-all-link">
          <a href="#" className="show-all-btn">
            Show all Artificial Intelligence (AI) courses
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};