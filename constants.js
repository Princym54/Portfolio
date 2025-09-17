// Configuration constants for Princy M's portfolio
const CONFIG = {
    // Personal information
    FULL_NAME: 'Princy M',
    ROLE: 'Java Full Stack Developer',
    SITE_NAME: 'Princy M - Portfolio',
    VERSION: '1.0.0',
    
    // Contact information
    EMAIL: 'princym2427@gmail.com',
    PHONE: '+91 7411237927',
    LINKEDIN: 'https://www.linkedin.com/in/princy-m-22b134360',
    
    // Resume link (placeholder)
    RESUME_URL: '#', // Replace with actual resume link
    
    // Animation settings
    ANIMATION_DURATION: 300,
    SCROLL_OFFSET: 100,
    LOADER_DURATION: 3000,
    TYPING_SPEED: 100,
    TYPING_DELAY: 1000,
    
    // Typing text array
    TYPING_TEXTS: [
        'Java Full Stack Developer',
        'Backend Developer',
        'Frontend Developer',
        'Problem Solver',
        'Tech Enthusiast'
    ],
    
    // Theme colors
    COLORS: {
        PRIMARY: '#667eea',
        SECONDARY: '#764ba2',
        ACCENT: '#f093fb',
        TEXT: '#333',
        TEXT_LIGHT: '#666',
        BACKGROUND: '#f8fafc',
        WHITE: '#ffffff',
        DARK: '#1a202c'
    },
    
    // Social media links
    SOCIAL_LINKS: {
        EMAIL: 'mailto:princym2427@gmail.com',
        PHONE: 'tel:+917411237927',
        LINKEDIN: 'https://www.linkedin.com/in/princy-m-22b134360'
    }
};

// Projects data
const PROJECTS_DATA = [
    {
        id: 1,
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website built to showcase my skills and projects. Features include dark theme, glassmorphism design, smooth animations, and dynamic content loading.',
        image: 'images/portfolio-preview.jpg',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        links: {
            live: '#',
            github: '#'
        },
        featured: true
    },
    {
        id: 2,
        title: 'Java Console Application',
        description: 'A console-based application demonstrating core Java concepts including OOP principles, data structures, and file handling.',
        image: 'images/java-app.jpg',
        technologies: ['Java', 'OOP', 'File I/O', 'Data Structures'],
        links: {
            live: '#',
            github: '#'
        },
        featured: false
    },
    {
        id: 3,
        title: 'Database Management System',
        description: 'A database project using MySQL with JDBC connectivity, featuring CRUD operations and data visualization.',
        image: 'images/database-project.jpg',
        technologies: ['MySQL', 'JDBC', 'Java', 'Database Design'],
        links: {
            live: '#',
            github: '#'
        },
        featured: false
    }
];

// Experience data
const EXPERIENCE_DATA = [
    {
        id: 1,
        type: 'education', // 'job' or 'education'
        title: 'Java Full Stack Developer Trainee',
        company: 'Tap Academy',
        location: 'Bangalore, India',
        startDate: '2024',
        endDate: 'Present',
        description: 'Currently learning and developing skills in Java Full Stack Development, including backend technologies, database management, and frontend frameworks. Gaining hands-on experience with real-world projects and industry best practices.',
        skills: ['Java', 'Spring Boot', 'MySQL', 'JDBC', 'HTML/CSS', 'JavaScript', 'Git'],
        achievements: [
            'Completed core Java programming modules',
            'Built multiple database-driven applications',
            'Developed responsive web interfaces',
            'Learned version control with Git'
        ]
    },
    {
        id: 2,
        type: 'education',
        title: 'Bachelor of Engineering',
        company: 'University Name', // Replace with actual university
        location: 'City, India',
        startDate: '2020',
        endDate: '2024',
        description: 'Completed Bachelor of Engineering with focus on computer science fundamentals, programming languages, and software development methodologies.',
        skills: ['Programming Fundamentals', 'Data Structures', 'Algorithms', 'Software Engineering'],
        achievements: [
            'Graduated with good academic standing',
            'Completed various programming projects',
            'Participated in technical workshops'
        ]
    }
];

// Skills data
const SKILLS_DATA = [
    {
        id: 1,
        name: 'Java',
        level: 75,
        icon: 'fab fa-java',
        category: 'Backend',
        description: 'Core Java, OOP concepts, Collections Framework'
    },
    {
        id: 2,
        name: 'JDBC',
        level: 70,
        icon: 'fas fa-database',
        category: 'Database',
        description: 'Database connectivity, SQL operations, Connection pooling'
    },
    {
        id: 3,
        name: 'MySQL',
        level: 80,
        icon: 'fas fa-database',
        category: 'Database',
        description: 'Database design, Queries, Stored procedures, Indexing'
    },
    {
        id: 4,
        name: 'HTML',
        level: 90,
        icon: 'fab fa-html5',
        category: 'Frontend',
        description: 'Semantic HTML, Accessibility, SEO best practices'
    },
    {
        id: 5,
        name: 'CSS',
        level: 85,
        icon: 'fab fa-css3-alt',
        category: 'Frontend',
        description: 'Modern CSS, Flexbox, Grid, Animations, Responsive design'
    },
    {
        id: 6,
        name: 'JavaScript',
        level: 75,
        icon: 'fab fa-js-square',
        category: 'Frontend',
        description: 'ES6+, DOM manipulation, Async programming, APIs'
    },
    {
        id: 7,
        name: 'Git',
        level: 65,
        icon: 'fab fa-git-alt',
        category: 'Tools',
        description: 'Version control, Branching, Merging, Collaboration'
    },
    {
        id: 8,
        name: 'Spring Boot',
        level: 60,
        icon: 'fas fa-leaf',
        category: 'Backend',
        description: 'REST APIs, Dependency Injection, Auto-configuration'
    }
];

// Contact information data
const CONTACT_DATA = {
    personal: {
        email: 'princym2427@gmail.com',
        phone: '+91 7411237927',
        location: 'Bangalore, India'
    },
    social: {
        linkedin: {
            url: 'https://www.linkedin.com/in/princy-m-22b134360',
            username: 'princy-m-22b134360',
            icon: 'fab fa-linkedin'
        },
        github: {
            url: '#', // Add GitHub profile when available
            username: 'princym',
            icon: 'fab fa-github'
        },
        twitter: {
            url: '#', // Add Twitter profile if available
            username: 'princym',
            icon: 'fab fa-twitter'
        }
    },
    availability: {
        status: 'Available for opportunities',
        message: 'I am currently seeking opportunities in Java Full Stack Development. Feel free to reach out for collaborations or job opportunities.',
        preferredContact: 'email'
    }
};

// Additional configuration for dynamic rendering
const RENDER_CONFIG = {
    // Number of items to show initially
    PROJECTS_LIMIT: 6,
    EXPERIENCE_LIMIT: 10,
    SKILLS_LIMIT: 8,
    
    // Animation delays for staggered effects
    STAGGER_DELAY: 100,
    
    // Placeholder images
    PLACEHOLDER_IMAGES: {
        project: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNjY3ZWVhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9qZWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg==',
        profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNzY0YmEyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9maWxlPC90ZXh0Pjwvc3ZnPg=='
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CONFIG,
        PROJECTS_DATA,
        EXPERIENCE_DATA,
        SKILLS_DATA,
        CONTACT_DATA,
        RENDER_CONFIG
    };
}
