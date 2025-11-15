const Courses = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const coursesPerSlide = 4;
  const totalSlides = Math.ceil(coursesData.courses.length / coursesPerSlide);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentCourses = () => {
    const startIndex = currentSlide * coursesPerSlide;
    return coursesData.courses.slice(startIndex, startIndex + coursesPerSlide);
  };

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
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
    <section className="courses-section">
      <div className="container">
        <div className="courses-header">
          <h2 className="section-title">{coursesData.heading}</h2>
          <div className="courses-navigation">
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
              disabled={currentSlide === totalSlides - 1}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="courses-carousel">
          <div 
            className="courses-track"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            {[...Array(totalSlides)].map((_, slideIndex) => (
              <div key={slideIndex} className="courses-slide">
                {coursesData.courses
                  .slice(slideIndex * coursesPerSlide, (slideIndex + 1) * coursesPerSlide)
                  .map(course => (
                    <div key={course.id} className="course-card">
                      <div className="course-image">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="course-thumbnail"
                        />
                        {course.bestseller && (
                          <div className="bestseller-badge">Bestseller</div>
                        )}
                      </div>
                      
                      <div className="course-content">
                        <h3 className="course-title">{course.title}</h3>
                        <p className="course-instructor">{course.instructor}</p>
                        
                        <div className="course-rating">
                          <span className="rating-score">{course.rating}</span>
                          {renderStars(course.rating)}
                          <span className="rating-count">({course.reviewCount.toLocaleString()})</span>
                        </div>
                        
                        <div className="course-price">
                          <span className="current-price">{formatPrice(course.price)}</span>
                          <span className="original-price">{formatPrice(course.originalPrice)}</span>
                        </div>
                        
                        <div className="course-meta">
                          <span className="last-updated">Updated {course.lastUpdated}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <div className="courses-indicators">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};