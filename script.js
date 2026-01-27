/* Portfolio Template - JavaScript Interactions */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });

    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    const html = document.documentElement;

    // Check for saved theme preference or default to dark
    const currentTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', currentTheme);

    // Update icon based on current theme
    if (currentTheme === 'light') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }

    themeToggle.addEventListener('click', () => {
        const theme = html.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Swap icons
        if (newTheme === 'light') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    });

    // Hide loader after page loads
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2500);

    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    if (cursor && cursorFollower) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            // Smooth cursor movement
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;

            cursor.style.left = cursorX - 6 + 'px';
            cursor.style.top = cursorY - 6 + 'px';
            cursorFollower.style.left = followerX - 20 + 'px';
            cursorFollower.style.top = followerY - 20 + 'px';

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Cursor hover effects
        const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .nav-link');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursorFollower.style.transform = 'scale(1.5)';
                cursorFollower.style.opacity = '0.3';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursorFollower.style.transform = 'scale(1)';
                cursorFollower.style.opacity = '0.5';
            });
        });
    }

    // Mobile Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');

            // Animate hamburger to X
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (mobileNav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close mobile nav when clicking a link
        const mobileNavLinks = mobileNav.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        const theme = html.getAttribute('data-theme');
        if (window.scrollY > 100) {
            if (theme === 'light') {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                navbar.style.background = 'rgba(0, 0, 0, 0.8)';
            }
        } else {
            if (theme === 'light') {
                navbar.style.background = 'rgba(255, 255, 255, 0.8)';
            } else {
                navbar.style.background = 'rgba(0, 0, 0, 0.6)';
            }
        }
    });

    // Parallax effect for hero silhouette
    const heroSilhouette = document.querySelector('.hero-silhouette');
    if (heroSilhouette) {
        window.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.clientX) / 30;
            const y = (window.innerHeight / 2 - e.clientY) / 30;
            heroSilhouette.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    // Text typing effect (optional - uncomment to use)
    /*
    const typingText = document.querySelector('.hero-tagline');
    if (typingText) {
        const text = typingText.textContent;
        typingText.textContent = '';
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                typingText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        setTimeout(typeWriter, 3000);
    }
    */

    // Intersection Observer for fade-in animations (backup for AOS)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Projects Slider Logic
    const projects = [
        {
            title: "Promotional Video Content",
            description: "Developed engaging promotional video content demonstrating advanced editing skills for Tech Crunch Limited.",
            label: "MOTION GRAPHICS",
            image: "linear-gradient(45deg, #FF416C, #FF4B2B)",
            link: "https://www.tiktok.com/@anknowndeeveejay/video/7597814975272340792",
            tags: ["Sony Vegas Pro", "Adobe After Effects", "InShot", "CapCut"],
            layeredContent: `
                <div class="floating-card">
                    <div class="floating-stat" style="margin-bottom: 10px;">
                        <div class="stat-icon"><i class="fas fa-play"></i></div>
                        <div>
                            <div style="font-size: 0.8rem; color: #aaa;">Views</div>
                            <div style="font-size: 1.2rem; font-weight: bold; color: #fff;">15k+</div>
                        </div>
                    </div>
                    <div style="font-size: 0.9rem; color: #ddd;">High engagement viral content</div>
                </div>
            `
        },
        {
            title: "AI Vision Creative Engine",
            description: "Next-gen AI image generation platform with neural network visualization and real-time rendering.",
            label: "ARTIFICIAL INTELLIGENCE",
            image: "url('file:///C:/Users/pc/.gemini/antigravity/brain/d73a4206-cd20-4b4c-b668-45795b128478/ai_vision_project_1769522844559.png')",
            link: "#",
            tags: ["Python", "TensorFlow", "React", "WebGL"],
            layeredContent: `
                <div class="floating-card" style="animation-delay: 0.3s; border-color: rgba(0, 255, 255, 0.3);">
                    <div class="floating-stat">
                        <div class="stat-icon" style="background: rgba(0, 255, 255, 0.1); color: cyan;"><i class="fas fa-brain"></i></div>
                        <div>
                            <div style="font-size: 0.8rem; color: #aaa;">Generation Speed</div>
                            <div style="font-size: 1.2rem; font-weight: bold; color: white;">0.8s</div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "CoinFlow Crypto Dashboard",
            description: "Real-time cryptocurrency analytics platform featuring advanced data visualization and secure wallet integration.",
            label: "FINTECH & BLOCKCHAIN",
            image: "url('file:///C:/Users/pc/.gemini/antigravity/brain/d73a4206-cd20-4b4c-b668-45795b128478/fintech_dashboard_project_1769523042056.png')",
            link: "#",
            tags: ["Next.js", "D3.js", "Solidity", "Tailwind"],
            layeredContent: `
                <div class="floating-card" style="animation-delay: 0.3s; border-color: rgba(0, 255, 0, 0.3);">
                    <div class="floating-stat">
                        <div class="stat-icon" style="background: rgba(0, 255, 0, 0.1); color: #00ff00;"><i class="fas fa-chart-line"></i></div>
                        <div>
                            <div style="font-size: 0.8rem; color: #aaa;">Portfolio Growth</div>
                            <div style="font-size: 1.2rem; font-weight: bold; color: #00ff00;">+124%</div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "Genesis 3D Experience",
            description: "Award-winning immersive web experience showcasing creative coding and interactive 3D geometries.",
            label: "CREATIVE CODING",
            image: "url('file:///C:/Users/pc/.gemini/antigravity/brain/d73a4206-cd20-4b4c-b668-45795b128478/immersive_3d_project_1769523204957.png')",
            link: "#",
            tags: ["Three.js", "GLSL", "GSAP", "Physics"],
            layeredContent: `
                <div class="floating-card" style="animation-delay: 0.3s; border-color: rgba(255, 100, 255, 0.3);">
                    <div class="floating-stat">
                        <div class="stat-icon" style="background: rgba(255, 100, 255, 0.1); color: #ff64ff;"><i class="fas fa-cube"></i></div>
                        <div>
                            <div style="font-size: 0.8rem; color: #aaa;">Frame Rate</div>
                            <div style="font-size: 1.2rem; font-weight: bold; color: white;">60 FPS</div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "Luxe Shop Mobile App",
            description: "High-conversion minimalist e-commerce application with seamless checkout and AR product preview.",
            label: "UI/UX DESIGN",
            image: "url('file:///C:/Users/pc/.gemini/antigravity/brain/d73a4206-cd20-4b4c-b668-45795b128478/ecommerce_app_project_1769523345540.png')",
            link: "#",
            tags: ["Figma", "Flutter", "iOS", "Android"],
            layeredContent: `
                <div class="floating-card" style="animation-delay: 0.3s;">
                    <div class="floating-stat">
                        <div class="stat-icon"><i class="fas fa-mobile-alt"></i></div>
                        <div>
                            <div style="font-size: 0.8rem; color: #aaa;">App Store Rating</div>
                            <div style="font-size: 1.2rem; font-weight: bold; color: #ffeb3b;">4.9 ★</div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "Social Media Growth",
            description: "Managed content scheduling and analyzed data using Meta Business Suite to drive performance.",
            label: "DIGITAL MARKETING",
            image: "linear-gradient(45deg, #11998e, #38ef7d)",
            link: "#",
            tags: ["Meta Business Suite", "Google Analytics", "Social Media"],
            layeredContent: `
                <div class="floating-card" style="animation-delay: 0.3s;">
                    <div class="floating-stat">
                        <div class="stat-icon"><i class="fas fa-chart-pie"></i></div>
                        <div>
                            <div style="font-size: 0.8rem; color: #aaa;">Engagement</div>
                            <div style="font-size: 1.2rem; font-weight: bold; color: #fff;">250%</div>
                        </div>
                    </div>
                </div>
            `
        }
    ];

    let currentSlide = 0;
    const slideDuration = 5000;
    let startTime = Date.now();
    let progressAnim;

    const projectImage = document.getElementById('projectImage');
    const projectLayeredContent = document.getElementById('projectLayeredContent');
    const projectLabel = document.getElementById('projectLabel');
    const projectLink = document.getElementById('projectLink');
    const projectTitle = document.getElementById('projectTitle');
    const projectDesc = document.getElementById('projectDesc');
    const projectTags = document.getElementById('projectTags');
    const tabsContainer = document.querySelector('.slider-controls');
    let tabs = document.querySelectorAll('.slider-tab');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    // Initialize Tabs Dynamically
    if (tabsContainer) {
        tabsContainer.innerHTML = projects.map((_, i) => `
            <div class="slider-tab ${i === 0 ? 'active' : ''}" data-slide="${i}">
                <div class="tab-progress"><div class="progress-bar"></div></div>
            </div>
        `).join('');
        tabs = document.querySelectorAll('.slider-tab'); // Re-select after dynamic creation
    }

    function updateProjectUI(index) {
        const project = projects[index];

        projectImage.style.opacity = '0';

        setTimeout(() => {
            projectImage.style.background = project.image;
            if (projectLayeredContent) {
                projectLayeredContent.innerHTML = project.layeredContent;
            }
            projectLabel.textContent = project.label;
            projectLink.href = project.link;
            projectTitle.textContent = project.title;
            projectDesc.textContent = project.description;
            projectTags.innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
            projectImage.style.opacity = '1';
        }, 300);

        tabs.forEach((tab, i) => {
            tab.classList.toggle('active', i === index);
            const bar = tab.querySelector('.progress-bar');
            if (i !== index) bar.style.width = '0%';
        });
    }

    function resetSlideTimer() {
        startTime = Date.now();
        cancelAnimationFrame(progressAnim);
        progressAnim = requestAnimationFrame(animateProgress);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % projects.length;
        updateProjectUI(currentSlide);
        resetSlideTimer();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + projects.length) % projects.length; // Loop backwards
        updateProjectUI(currentSlide);
        resetSlideTimer();
    }

    function animateProgress() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / slideDuration) * 100, 100);

        const activeBar = tabs[currentSlide].querySelector('.progress-bar');
        if (activeBar) activeBar.style.width = `${progress}%`;

        if (progress >= 100) {
            nextSlide();
        } else {
            progressAnim = requestAnimationFrame(animateProgress);
        }
    }

    // Event Listeners
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            currentSlide = index;
            updateProjectUI(currentSlide);
            resetSlideTimer();
        });
    });

    if (projectImage) {
        // Initialize
        updateProjectUI(0);
        progressAnim = requestAnimationFrame(animateProgress);

        // Pause on hover
        const sliderContainer = document.querySelector('.projects-slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', () => cancelAnimationFrame(progressAnim));
            sliderContainer.addEventListener('mouseleave', () => {
                startTime = Date.now();
                progressAnim = requestAnimationFrame(animateProgress);
            });
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.recognition-card').forEach(el => {
        observer.observe(el);
    });

    // Counter animation for stats
    const animateCounter = (element, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start) + '+';
            }
        }, 16);
    };

    // Observe stats for counter animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const value = parseInt(stat.textContent);
                    if (value && !stat.classList.contains('animated')) {
                        stat.classList.add('animated');
                        animateCounter(stat, value);
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    const aboutStats = document.querySelector('.about-stats');
    if (aboutStats) {
        statsObserver.observe(aboutStats);
    }

    // Add magnetic effect to buttons (subtle pull effect)
    const magneticButtons = document.querySelectorAll('.btn');
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });

    console.log('Portfolio initialized successfully! 🚀');
});

// Prevent context menu on images (optional - for portfolio protection)
// document.addEventListener('contextmenu', (e) => {
//     if (e.target.tagName === 'IMG') e.preventDefault();
// });
