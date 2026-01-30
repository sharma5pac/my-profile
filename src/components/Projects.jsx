import { useState, useEffect, useRef } from 'react';

const projects = [
    {
        title: "TechCrunch Limited Website",
        description: "Official corporate website for TechCrunch Limited, featuring a modern responsive design and optimized performance.",
        label: "WEB DEVELOPMENT",
        image: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        link: "#",
        tags: ["React", "Next.js", "Tailwind CSS"],
        type: "gradient",
        layeredContent: (
            <div className="floating-card">
                <div className="floating-stat">
                    <div className="stat-icon"><i className="fas fa-globe"></i></div>
                    <div>
                        <div style={{ fontSize: '0.8rem', color: '#aaa' }}>Uptime</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>99.9%</div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Lumina Bible App",
        description: "A comprehensive mobile application for Bible study with offline capabilities and audio features.",
        label: "MOBILE APPLICATION",
        image: "linear-gradient(45deg, #FFD700, #FFA500)",
        link: "#",
        tags: ["React Native", "Firebase", "Audio API"],
        type: "gradient",
        layeredContent: (
            <div className="floating-card" style={{ borderColor: 'rgba(255, 215, 0, 0.3)' }}>
                <div className="floating-stat">
                    <div className="stat-icon" style={{ background: 'rgba(255, 215, 0, 0.1)', color: 'gold' }}><i className="fas fa-book-open"></i></div>
                    <div>
                        <div style={{ fontSize: '0.8rem', color: '#aaa' }}>Downloads</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'gold' }}>10k+</div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Haboya Collections",
        description: "E-commerce platform for Haboya Collections featuring a seamless shopping experience and inventory management.",
        label: "E-COMMERCE",
        image: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
        link: "#",
        tags: ["Shopify", "Liquid", "UX Design"],
        type: "gradient",
        layeredContent: (
            <div className="floating-card">
                <div className="floating-stat">
                    <div className="stat-icon"><i className="fas fa-shopping-bag"></i></div>
                    <div>
                        <div style={{ fontSize: '0.8rem', color: '#aaa' }}>Conversion</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>+25%</div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Eco Flash Website",
        description: "An environmental awareness platform promoting sustainable energy solutions and eco-friendly practices.",
        label: "SUSTAINABILITY",
        image: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        link: "#",
        tags: ["Green web", "HTML5", "CSS3"],
        type: "gradient",
        layeredContent: (
            <div className="floating-card" style={{ borderColor: 'rgba(56, 239, 125, 0.3)' }}>
                <div className="floating-stat">
                    <div className="stat-icon" style={{ background: 'rgba(56, 239, 125, 0.1)', color: '#38ef7d' }}><i className="fas fa-leaf"></i></div>
                    <div>
                        <div style={{ fontSize: '0.8rem', color: '#aaa' }}>Impact</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#38ef7d' }}>High</div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Shallo Music App",
        description: "Next-generation music streaming service with curated playlists and high-fidelity audio streaming.",
        label: "MUSIC STREAMING",
        image: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
        link: "#",
        tags: ["Flutter", "Node.js", "Stream API"],
        type: "gradient",
        layeredContent: (
            <div className="floating-card">
                <div className="floating-stat">
                    <div className="stat-icon"><i className="fas fa-music"></i></div>
                    <div>
                        <div style={{ fontSize: '0.8rem', color: '#aaa' }}>Active Users</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>5k+</div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Tech Crunch Branding",
        description: "Complete corporate identity design package including business cards, door stickers, and office signage.",
        label: "GRAPHIC DESIGN",
        image: "linear-gradient(45deg, #FF416C, #FF4B2B)",
        link: "#",
        tags: ["Adobe Illustrator", "Photoshop", "Print Design"],
        type: "gradient",
        layeredContent: (
            <div className="floating-card">
                <div className="floating-stat">
                    <div className="stat-icon"><i className="fas fa-palette"></i></div>
                    <div>
                        <div style={{ fontSize: '0.8rem', color: '#aaa' }}>Assets</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>50+</div>
                    </div>
                </div>
            </div>
        )
    }
];

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-play logic
    useEffect(() => {
        let interval;
        let animationFrame;
        let startTime = Date.now();
        const slideDuration = 5000; // 5 seconds

        const animate = () => {
            if (isHovered) {
                startTime = Date.now() - (progress / 100 * slideDuration); // Pause time
                animationFrame = requestAnimationFrame(animate);
                return;
            }

            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / slideDuration) * 100, 100);
            setProgress(newProgress);

            if (newProgress >= 100) {
                setCurrentSlide((prev) => (prev + 1) % projects.length);
                startTime = Date.now();
                setProgress(0);
            } else {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [currentSlide, isHovered]); // Dependency on currentSlide resets timer when slide changes manually

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
        setProgress(0);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
        setProgress(0);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
        setProgress(0);
    };

    const currentProject = projects[currentSlide];

    return (
        <section className="projects" id="projects">
            <h2 className="section-title" data-aos="fade-up">FEATURED PROJECTS</h2>
            <div className="projects-slider-container" data-aos="fade-up"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>

                {/* Navigation Arrows */}
                <button className="slider-nav-btn prev" onClick={prevSlide} aria-label="Previous Project">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button className="slider-nav-btn next" onClick={nextSlide} aria-label="Next Project">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>

                <div className="slider-main">
                    <div className="slide-active-content">
                        <div className="slide-image-box">
                            <div className="slide-image-bg"
                                style={{
                                    background: currentProject.image,
                                    opacity: 1,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                {/* Layered UI Elements */}
                                <div className="layered-content">
                                    {currentProject.layeredContent}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls / Progress Bars */}
                <div className="slider-controls">
                    {projects.map((_, index) => (
                        <div
                            key={index}
                            className={`slider-tab ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => handleSlideChange(index)}
                        >
                            <div className="tab-progress">
                                <div
                                    className="progress-bar"
                                    style={{ width: index === currentSlide ? `${progress}%` : '0%' }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="slider-details">
                    <div className="details-header">
                        <span className="project-category-pill">{currentProject.label}</span>
                        <h3 className="project-title">{currentProject.title}</h3>
                    </div>
                    <p className="project-description">{currentProject.description}</p>
                    <div className="project-footer">
                        <div className="project-tags">
                            {currentProject.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                        <a href={currentProject.link} className="project-link-action">
                            EXPLORE PROJECT
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" style={{ marginLeft: '8px' }}>
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
