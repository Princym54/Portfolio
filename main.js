// Main JavaScript functionality for Princy M's portfolio
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');
    
    // Initialize the portfolio
    initPortfolio();
});

// Initialize portfolio functionality
function initPortfolio() {
    // Start loader animation
    initLoader();
    
    // Initialize all components after loader
    setTimeout(() => {
        hideLoader();
        initNavbar();
        initTypingEffect();
        initCodeEditor();
        initSmoothScrolling();
        
        // Render dynamic content
        renderProjects();
        renderExperience();
        renderSkills();
        renderContact();
        
        // Initialize interactive features after content is rendered
        initSkillBars();
        initContactForm();
        addInteractiveFeatures();
        initScrollAnimations();
        
        console.log(`${CONFIG.SITE_NAME} v${CONFIG.VERSION} initialized`);
    }, CONFIG.LOADER_DURATION);
}

// Loader functionality
function initLoader() {
    const loadingName = document.getElementById('loadingName');
    const name = CONFIG.FULL_NAME;
    let index = 0;
    
    // Character by character animation
    function typeCharacter() {
        if (index < name.length) {
            loadingName.textContent += name.charAt(index);
            index++;
            setTimeout(typeCharacter, 200);
        }
    }
    
    typeCharacter();
}

function hideLoader() {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    loader.style.transform = 'scale(0.95)';
    setTimeout(() => {
        loader.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 500);
}

// Navbar functionality with enhanced section highlighting
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Enhanced navbar scroll effect and section highlighting
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Navbar background change
        if (scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Section highlighting
        highlightActiveSection();
    });
    
    // Initial section highlighting
    highlightActiveSection();
}

// Enhanced section highlighting
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollY = window.scrollY + 100;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Typing effect for hero section
function initTypingEffect() {
    const typingText = document.getElementById('typingText');
    const texts = CONFIG.TYPING_TEXTS;
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : CONFIG.TYPING_SPEED;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = CONFIG.TYPING_DELAY;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    typeEffect();
}

// Code editor typing animation
function initCodeEditor() {
    const codeFields = {
        nameField: 'Princy M',
        roleField: 'Java Full Stack Developer',
        locationField: 'Bangalore, India',
        emailField: 'princym2427@gmail.com',
        skillsField: '"Java", "MySQL", "HTML", "CSS", "JavaScript"',
        passionField: 'Building amazing web applications',
        statusField: 'Available for opportunities'
    };
    
    let currentFieldIndex = 0;
    const fieldKeys = Object.keys(codeFields);
    
    function typeCodeField() {
        if (currentFieldIndex >= fieldKeys.length) return;
        
        const fieldKey = fieldKeys[currentFieldIndex];
        const fieldElement = document.getElementById(fieldKey);
        const text = codeFields[fieldKey];
        
        if (!fieldElement) {
            currentFieldIndex++;
            setTimeout(typeCodeField, 500);
            return;
        }
        
        let charIndex = 0;
        fieldElement.classList.add('typing-field');
        
        function typeChar() {
            if (charIndex < text.length) {
                fieldElement.textContent = text.substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeChar, 80);
            } else {
                fieldElement.classList.remove('typing-field');
                currentFieldIndex++;
                setTimeout(typeCodeField, 800);
            }
        }
        
        typeChar();
    }
    
    // Start typing animation after a delay
    setTimeout(typeCodeField, 2000);
}

// Smooth scrolling functionality
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Enhanced scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger child animations
                const children = entry.target.querySelectorAll('.project-card, .skill-card, .timeline-item, .contact-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    document.querySelectorAll('section, .project-card, .skill-card, .timeline-item').forEach(element => {
        observer.observe(element);
    });
}

// Dynamic content rendering functions

// Render projects section
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    // Clear existing content
    projectsGrid.innerHTML = '';
    
    // Limit projects if specified
    const projectsToShow = PROJECTS_DATA.slice(0, RENDER_CONFIG.PROJECTS_LIMIT);
    
    projectsToShow.forEach((project, index) => {
        const projectCard = createProjectCard(project);
        projectCard.style.animationDelay = `${index * RENDER_CONFIG.STAGGER_DELAY}ms`;
        projectsGrid.appendChild(projectCard);
    });
}

// Create individual project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-project-id', project.id);
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="project-placeholder" style="display: none;">
                <i class="fas fa-code"></i>
            </div>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.links.live !== '#' ? `
                    <a href="${project.links.live}" class="project-link" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                        Live Demo
                    </a>
                ` : ''}
                ${project.links.github !== '#' ? `
                    <a href="${project.links.github}" class="project-link" target="_blank">
                        <i class="fab fa-github"></i>
                        Source Code
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    return card;
}

// Render experience section
function renderExperience() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    
    // Clear existing content except the timeline line
    const timelineItems = timeline.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => item.remove());
    
    // Sort experience by start date (most recent first)
    const sortedExperience = [...EXPERIENCE_DATA].sort((a, b) => {
        if (b.endDate === 'Present') return 1;
        if (a.endDate === 'Present') return -1;
        return new Date(b.startDate) - new Date(a.startDate);
    });
    
    sortedExperience.forEach((exp, index) => {
        const timelineItem = createTimelineItem(exp, index);
        timeline.appendChild(timelineItem);
    });
}

// Create individual timeline item
function createTimelineItem(experience, index) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.style.animationDelay = `${index * RENDER_CONFIG.STAGGER_DELAY}ms`;
    
    const dateRange = `${experience.startDate} - ${experience.endDate}`;
    const typeIcon = experience.type === 'job' ? 'fas fa-briefcase' : 'fas fa-graduation-cap';
    
    item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <div class="timeline-date">
                <i class="${typeIcon}"></i>
                ${dateRange}
            </div>
            <h3 class="timeline-title">${experience.title}</h3>
            <h4 class="timeline-company">${experience.company} - ${experience.location}</h4>
            <p class="timeline-description">${experience.description}</p>
            ${experience.achievements ? `
                <div class="timeline-achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                        ${experience.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            <div class="timeline-skills">
                ${experience.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `;
    
    return item;
}

// Render skills section
function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;
    
    // Clear existing content
    skillsGrid.innerHTML = '';
    
    // Group skills by category for better organization
    const skillsByCategory = SKILLS_DATA.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {});
    
    // Render all skills
    SKILLS_DATA.forEach((skill, index) => {
        const skillCard = createSkillCard(skill);
        skillCard.style.animationDelay = `${index * RENDER_CONFIG.STAGGER_DELAY}ms`;
        skillsGrid.appendChild(skillCard);
    });
}

// Create individual skill card
function createSkillCard(skill) {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.setAttribute('data-skill-id', skill.id);
    card.setAttribute('data-category', skill.category);
    
    card.innerHTML = `
        <div class="skill-icon">
            <i class="${skill.icon}"></i>
        </div>
        <h3 class="skill-name">${skill.name}</h3>
        <p class="skill-description">${skill.description}</p>
        <div class="skill-level">
            <div class="skill-bar">
                <div class="skill-progress" data-width="${skill.level}%"></div>
            </div>
            <span class="skill-percentage">${skill.level}%</span>
        </div>
    `;
    
    return card;
}

// Render contact section
function renderContact() {
    renderContactInfo();
    updateContactForm();
}

// Render contact information
function renderContactInfo() {
    const contactInfo = document.querySelector('.contact-info');
    if (!contactInfo) return;
    
    // Clear existing content
    contactInfo.innerHTML = '';
    
    // Add personal contact items
    const personalContacts = [
        {
            icon: 'fas fa-envelope',
            title: 'Email',
            value: CONTACT_DATA.personal.email,
            link: `mailto:${CONTACT_DATA.personal.email}`
        },
        {
            icon: 'fas fa-phone',
            title: 'Phone',
            value: CONTACT_DATA.personal.phone,
            link: `tel:${CONTACT_DATA.personal.phone}`
        },
        {
            icon: 'fas fa-map-marker-alt',
            title: 'Location',
            value: CONTACT_DATA.personal.location,
            link: null
        }
    ];
    
    personalContacts.forEach(contact => {
        const contactItem = createContactItem(contact);
        contactInfo.appendChild(contactItem);
    });
    
    // Add social media contacts
    Object.entries(CONTACT_DATA.social).forEach(([platform, data]) => {
        if (data.url !== '#') {
            const socialContact = {
                icon: data.icon,
                title: platform.charAt(0).toUpperCase() + platform.slice(1),
                value: `@${data.username}`,
                link: data.url
            };
            const contactItem = createContactItem(socialContact);
            contactInfo.appendChild(contactItem);
        }
    });
}

// Create individual contact item
function createContactItem(contact) {
    const item = document.createElement('div');
    item.className = 'contact-item';
    
    const content = contact.link ? 
        `<a href="${contact.link}" ${contact.link.startsWith('http') ? 'target="_blank"' : ''}>${contact.value}</a>` :
        contact.value;
    
    item.innerHTML = `
        <div class="contact-icon">
            <i class="${contact.icon}"></i>
        </div>
        <div class="contact-details">
            <h3>${contact.title}</h3>
            ${content}
        </div>
    `;
    
    return item;
}

// Update contact form with dynamic data
function updateContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    // Add availability status if exists
    if (CONTACT_DATA.availability) {
        const availabilityDiv = document.createElement('div');
        availabilityDiv.className = 'availability-status';
        availabilityDiv.innerHTML = `
            <div class="status-indicator">
                <span class="status-dot"></span>
                <span class="status-text">${CONTACT_DATA.availability.status}</span>
            </div>
            <p class="availability-message">${CONTACT_DATA.availability.message}</p>
        `;
        
        form.parentNode.insertBefore(availabilityDiv, form);
    }
}

// Skill bars animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
                bar.style.transition = 'width 2s ease-in-out';
            }
        });
    };
    
    // Animate on scroll
    window.addEventListener('scroll', Utils.debounce(animateSkillBars, 100));
    
    // Initial check
    animateSkillBars();
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const resumeBtn = document.getElementById('resumeBtn');
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show success message (you can integrate with a real form service)
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            
            // Reset form
            this.reset();
        });
    }
    
    // Resume download
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (CONFIG.RESUME_URL !== '#') {
                window.open(CONFIG.RESUME_URL, '_blank');
            } else {
                showNotification('Resume download will be available soon!', 'info');
            }
        });
    }
}

// Enhanced interactive features
function addInteractiveFeatures() {
    // Enhanced hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = `transform ${CONFIG.ANIMATION_DURATION}ms ease`;
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        });
    });
    
    // Enhanced hover effects for skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotateY(5deg)';
            this.style.transition = `transform ${CONFIG.ANIMATION_DURATION}ms ease`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateY(0deg)';
        });
    });
    
    // Enhanced button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Set background color based on type
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Utility functions
const Utils = {
    // Debounce function for performance optimization
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Smooth scroll to element
    scrollToElement: function(element, offset = 0) {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
};
