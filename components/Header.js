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
              <img 
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" 
                alt="Udemy"
                className="logo-image"
              />
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