// Dummy data for the Udemy clone - this will be used later for dynamic content

// Navigation menu items
const navigationData = {
  categories: [
    "Development",
    "Business", 
    "Finance & Accounting",
    "IT & Software",
    "Office Productivity",
    "Personal Development",
    "Design",
    "Marketing",
    "Health & Fitness",
    "Music"
  ],
  userActions: ["Log in", "Sign up", "Teach on Udemy"]
};

// Hero section data
const heroData = {
  mainHeading: "Jump into learning — for less",
  subHeading: "If you're new to Udemy, we've got good news: For a limited time, courses start at just $11.99 for new learners!",
  ctaButton: "Sign up now",
  heroImage: "https://img-c.udemycdn.com/notices/web_carousel_slide/image/b4e79be5-6a5d-42c7-be1b-0ead8d2bc67d.jpg",
  videoThumbnail: "https://img-c.udemycdn.com/user/200_H/38516342_2833_5.jpg",
  alternativeOffer: {
    title: "Subscribe to the best of Udemy",
    description: "With Personal Plan, you get access to 26,000+ of our top-rated courses in tech, business, and more.",
    ctaButton: "Try it now",
    heroImage: "https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@2x.webp"
  }
};

// Skills and topics data
const skillsData = {
  heading: "Skills to transform your career and life",
  subHeading: "From critical skills to technical topics, Udemy supports your professional development.",
  topSkills: [
    { name: "Artificial Intelligence (AI)", learners: "5.2M+", category: "trending" },
    { name: "Python", learners: "49.6M+", category: "development" },
    { name: "Microsoft Excel", learners: "8.2M+", category: "business" },
    { name: "AI Agents & Agentic AI", learners: "1.2M+", category: "trending" },
    { name: "Digital Marketing", learners: "4.1M+", category: "marketing" },
    { name: "Amazon AWS", learners: "6.8M+", category: "cloud" },
    { name: "Web Development", learners: "14.3M+", category: "development" },
    { name: "Data Science", learners: "8.2M+", category: "data" }
  ],
  categories: [
    {
      name: "Development",
      skills: [
        { name: "Python", learners: "49,632,482" },
        { name: "Web Development", learners: "14,354,218" },
        { name: "Data Science", learners: "8,206,167" },
        { name: "JavaScript", learners: "15,703,084" },
        { name: "React JS", learners: "7,091,369" }
      ]
    },
    {
      name: "Business",
      skills: [
        { name: "PMI Project Management Professional (PMP)", learners: "2,784,567" },
        { name: "Microsoft Power BI", learners: "5,023,989" },
        { name: "Leadership", learners: "3,459,128" },
        { name: "Communication Skills", learners: "2,847,391" }
      ]
    },
    {
      name: "Design",
      skills: [
        { name: "Blender", learners: "3,065,522" },
        { name: "Graphic Design", learners: "4,643,451" },
        { name: "User Experience (UX) Design", learners: "2,129,798" },
        { name: "Adobe Photoshop", learners: "5,892,034" }
      ]
    }
  ]
};

// Course cards data
const coursesData = {
  heading: "Trending courses",
  courses: [
    {
      id: 1,
      title: "The Complete JavaScript Course 2024: From Zero to Expert!",
      instructor: "Jonas Schmedtmann",
      rating: 4.7,
      reviewCount: 185394,
      price: 84.99,
      originalPrice: 199.99,
      image: "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
      bestseller: true,
      lastUpdated: "November 2025"
    },
    {
      id: 2,
      title: "Python for Data Science and Machine Learning Bootcamp",
      instructor: "Jose Portilla",
      rating: 4.6,
      reviewCount: 142839,
      price: 89.99,
      originalPrice: 199.99,
      image: "https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg",
      bestseller: true,
      lastUpdated: "October 2025"
    },
    {
      id: 3,
      title: "The Complete Web Developer Course 3.0",
      instructor: "Rob Percival",
      rating: 4.5,
      reviewCount: 296847,
      price: 79.99,
      originalPrice: 199.99,
      image: "https://img-c.udemycdn.com/course/240x135/764164_de03_5.jpg",
      bestseller: false,
      lastUpdated: "September 2025"
    },
    {
      id: 4,
      title: "React - The Complete Guide 2024",
      instructor: "Maximilian Schwarzmüller", 
      rating: 4.6,
      reviewCount: 198473,
      price: 94.99,
      originalPrice: 199.99,
      image: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
      bestseller: true,
      lastUpdated: "November 2025"
    },
    {
      id: 5,
      title: "AWS Certified Solutions Architect Associate",
      instructor: "Stephane Maarek",
      rating: 4.7,
      reviewCount: 156789,
      price: 89.99,
      originalPrice: 199.99,
      image: "https://img-c.udemycdn.com/course/240x135/362070_d819_10.jpg",
      bestseller: true,
      lastUpdated: "October 2025"
    },
    {
      id: 6,
      title: "The Complete Digital Marketing Course - 12 Courses in 1",
      instructor: "Daragh Walsh",
      rating: 4.5,
      reviewCount: 89456,
      price: 84.99,
      originalPrice: 199.99,
      image: "https://img-c.udemycdn.com/course/240x135/1200864_8fc2_4.jpg",
      bestseller: false,
      lastUpdated: "November 2025"
    }
  ]
};

// Trusted companies data
const trustedCompaniesData = {
  heading: "Trusted by over 17,000 companies and millions of learners around the world",
  companies: [
    {
      name: "Volkswagen",
      logo: "https://cms-images.udemycdn.com/96883mtakkm8/3E0eIh3tWHNWADiHNBmW4j/3444d1a4d029f283aa7d10ccf982421e/volkswagen_logo.svg",
      alt: "Volkswagen logo"
    },
    {
      name: "Samsung",
      logo: "https://cms-images.udemycdn.com/96883mtakkm8/2pNyDO0KV1eHXk51HtaAAz/090fac96127d62e784df31e93735f76a/samsung_logo.svg",
      alt: "Samsung logo"
    },
    {
      name: "Cisco",
      logo: "https://cms-images.udemycdn.com/96883mtakkm8/3YzfvEjCAUi3bKHLW2h1h8/ec478fa1ed75f6090a7ecc9a083d80af/cisco_logo.svg",
      alt: "Cisco logo"
    },
    {
      name: "Vimeo",
      logo: "https://cms-images.udemycdn.com/96883mtakkm8/23XnhdqwGCYUhfgIJzj3PM/77259d1ac2a7d771c4444e032ee40d9e/vimeo_logo_resized-2.svg",
      alt: "Vimeo logo"
    },
    {
      name: "Procter & Gamble",
      logo: "https://cms-images.udemycdn.com/96883mtakkm8/1UUVZtTGuvw23MwEnDPUr3/2683579ac045486a0aff67ce8a5eb240/procter_gamble_logo.svg",
      alt: "Procter & Gamble logo"
    },
    {
      name: "Hewlett Packard Enterprise",
      logo: "https://cms-images.udemycdn.com/96883mtakkm8/1GoAicYDYxxRPGnCpg93gi/a8b6190cc1a24e21d6226200ca488eb8/hewlett_packard_enterprise_logo.svg",
      alt: "Hewlett Packard Enterprise logo"
    },
    {
      name: "Citi",
      logo: "https://cms-images.udemycdn.com/96883mtakkm8/2tQm6aYrWQzlKBQ95W00G/c7aaf002814c2cde71d411926eceaefa/citi_logo.svg",
      alt: "Citi logo"
    },
    {
      name: "Ericsson", 
      logo: "https://cms-images.udemycdn.com/96883mtakkm8/7guDRVYa2DZD0wD1SyxREP/b704dfe6b0ffb3b26253ec36b4aab505/ericsson_logo.svg",
      alt: "Ericsson logo"
    },
    {
      name: "NetApp",
      logo: "https://s.udemycdn.com/partner-logos/v4/netapp-light.svg",
      alt: "NetApp logo"
    },
    {
      name: "Eventbrite",
      logo: "https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg",
      alt: "Eventbrite logo"
    }
  ]
};

// Career paths data
const careerPathsData = {
  heading: "Ready to reimagine your career?",
  subHeading: "Get the skills and real-world experience employers want with Career Accelerators.",
  paths: [
    {
      name: "Full Stack Web Developer",
      rating: 4.7,
      ratings: "462K",
      hours: "87.8 total hours",
      link: "/career/full-stack-web-developer/"
    },
    {
      name: "Digital Marketer", 
      rating: 4.4,
      ratings: "3.7K",
      hours: "28.4 total hours",
      link: "/career/digital-marketer/"
    },
    {
      name: "Data Scientist",
      rating: 4.6,
      ratings: "223K", 
      hours: "47.1 total hours",
      link: "/career/data-scientist/"
    }
  ]
};

// Testimonials data
const testimonialsData = {
  heading: "Join others transforming their lives through learning",
  testimonials: [
    {
      text: "Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.",
      author: "Alvin Lim",
      position: "Technical Co-Founder, CTO at Dimensional",
      course: "iOS & Swift course"
    },
    {
      text: "Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.",
      author: "William A. Wachlin",
      position: "Partner Account Manager at Amazon Web Services",
      course: "AWS course"
    },
    {
      text: "With Udemy Business employees were able to marry the two together, technology and consultant soft skills... to help drive their careers forward.",
      author: "Ian Stevens",
      position: "Head of Capability Development, North America at Publicis Sapient",
      course: "Business course"
    }
  ]
};
// Utility function for image fallback
const getImageUrl = (primaryUrl, fallbackUrl = null, useRandomPlaceholder = true) => {
  if (primaryUrl && primaryUrl !== "/api/placeholder/300/200") {
    return primaryUrl;
  }
  
  if (fallbackUrl) {
    return fallbackUrl;
  }
  
  if (useRandomPlaceholder) {
    const randomId = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/300/200?random=${randomId}`;
  }
  
  return "assets/images/default-course.jpg";
};