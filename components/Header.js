const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <header className="header">
      <div className="header-top-banner">
        <span className="banner-text">
          New-learner offer | Courses from $11.99. 
          <strong> Click button to see savings.</strong>
        </span>
        <span className="banner-timer">Ends in 5h 59m 50s.</span>
      </div>
      
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="header-logo">
              <svg width="91" height="34" viewBox="0 0 91 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.05 8.112L7.024 4.056C6.83 3.953 6.59 3.953 6.396 4.056L0.343 7.499C0.123 7.613 0 7.847 0 8.099V17.691C0 17.943 0.123 18.177 0.343 18.291L6.396 21.734C6.59 21.837 6.83 21.837 7.024 21.734L14.05 17.678C14.27 17.564 14.393 17.33 14.393 17.078V8.611C14.393 8.359 14.27 8.125 14.05 8.112ZM2.632 9.083L6.71 11.35L10.788 9.083L6.71 6.816L2.632 9.083ZM1.317 16.95V9.651L6.083 12.324V19.623L1.317 16.95ZM7.337 19.623V12.324L12.103 9.651V16.95L7.337 19.623Z" fill="#A435F0"/>
                <path d="M91 17.678C91 19.135 89.828 20.307 88.371 20.307C86.914 20.307 85.742 19.135 85.742 17.678C85.742 16.221 86.914 15.049 88.371 15.049C89.828 15.049 91 16.221 91 17.678Z" fill="#A435F0"/>
                <path d="M74.98 8.945C74.863 8.945 74.759 8.997 74.694 9.083C74.629 9.169 74.612 9.282 74.649 9.383L76.254 13.63L77.859 9.383C77.896 9.282 77.879 9.169 77.814 9.083C77.749 8.997 77.645 8.945 77.528 8.945H74.98Z" fill="#A435F0"/>
                <path d="M35.475 8.615C34.998 8.615 34.615 9.002 34.615 9.485V19.307C34.615 19.79 34.998 20.177 35.475 20.177C35.952 20.177 36.335 19.79 36.335 19.307V15.759H40.413C42.227 15.759 43.695 14.282 43.695 12.458C43.695 10.634 42.227 9.157 40.413 9.157H35.475V8.615ZM40.413 14.039H36.335V10.877H40.413C41.279 10.877 41.975 11.577 41.975 12.458C41.975 13.339 41.279 14.039 40.413 14.039Z" fill="#1C1D1F"/>
              </svg>
              <span className="logo-text">Udemy</span>
            </div>

            {/* Categories Menu */}
            <div className="header-categories">
              <button 
                className="categories-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className="fas fa-bars"></i>
                Categories
              </button>
              
              {isMenuOpen && (
                <div className="categories-dropdown">
                  {navigationData.categories.map((category, index) => (
                    <a key={index} href="#" className="category-link">
                      {category}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Search Bar */}
            <div className="header-search">
              <form onSubmit={handleSearch} className="search-form">
                <div className="search-input-wrapper">
                  <i className="fas fa-search search-icon"></i>
                  <input
                    type="text"
                    placeholder="Search for anything"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
              </form>
            </div>

            {/* Navigation Links */}
            <nav className="header-nav">
              <a href="#" className="nav-link">Udemy Business</a>
              <a href="#" className="nav-link">Teach on Udemy</a>
              <a href="#" className="nav-link">My learning</a>
            </nav>

            {/* User Actions */}
            <div className="header-actions">
              <button className="wishlist-btn">
                <i className="far fa-heart"></i>
              </button>
              <button className="cart-btn">
                <i className="fas fa-shopping-cart"></i>
              </button>
              <button className="login-btn">Log in</button>
              <button className="signup-btn">Sign up</button>
              <button className="language-btn">
                <i className="fas fa-globe"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};