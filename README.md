# Udemy Clone Landing Page

A React-based clone of Udemy's landing page built with HTML, CSS, JavaScript and React.

## Features Implemented

- **Header Navigation**: Logo, categories menu, search bar, and user actions
- **Hero Section**: Promotional banners with alternating offers
- **Skills Section**: Categorized skills with learner counts and interactive tabs
- **Trending Courses**: Course carousel with ratings, pricing, and navigation
- **Trusted Companies**: Company logos grid showing enterprise clients

## Technologies Used

- **React 18** - UI library
- **Vanilla CSS** - Styling (no frameworks)
- **JavaScript** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## Project Structure

```
Udemy-Clone/
├── index.html          # Main HTML file
├── app.js             # Main React app component
├── data.js            # All dummy data objects and arrays
├── styles.css         # Complete styling
├── package.json       # Project dependencies
├── components/        # React components
│   ├── Header.js      # Navigation header
│   ├── Hero.js        # Hero section with banners
│   ├── Skills.js      # Skills and topics section
│   ├── Courses.js     # Course cards carousel
│   └── TrustedCompanies.js # Company logos section
└── README.md          # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd "d:\Fall25\Internet Programming\Lab_Assignments\Udemy-Clone"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Alternative: Direct File Opening

Since this project uses CDN links for React, you can also:

1. Simply open `index.html` in your web browser
2. Or use any local server like Live Server extension in VS Code

## Data Structure

All dummy data is organized in `data.js` with the following objects:

- `navigationData` - Menu items and user actions
- `heroData` - Hero section content and offers
- `skillsData` - Skills categories and learner statistics
- `coursesData` - Course information with ratings and pricing
- `trustedCompaniesData` - Company logos and information
- `careerPathsData` - Career accelerator programs
- `testimonialsData` - User testimonials and success stories

## Key Features

### Interactive Components
- **Responsive Navigation**: Collapsible categories menu
- **Dynamic Hero**: Alternating promotional offers
- **Tabbed Skills**: Filterable skills by category
- **Course Carousel**: Slideable course cards with navigation
- **Hover Effects**: Interactive elements with smooth transitions

### Responsive Design
- Mobile-first approach
- Breakpoints at 1024px, 768px, and 480px
- Adaptive layouts for all screen sizes
- Touch-friendly navigation on mobile devices

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Descriptive alt texts for images

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

- Uses React 18 with functional components and hooks
- No build process required - runs directly in browser
- CSS Grid and Flexbox for layouts
- Font Awesome for consistent iconography
- Placeholder images for course thumbnails

## Future Enhancements

The dummy data structure is ready for:
- Backend API integration
- User authentication
- Course enrollment
- Shopping cart functionality
- Search and filtering
- User profiles and progress tracking

## License

This project is for educational purposes only.
