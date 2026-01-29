import { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileActive, setMobileActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to get navbar background style
    const getNavBackground = () => {
        if (scrolled) {
            return theme === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.8)';
        } else {
            return theme === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.6)';
        }
    };

    const toggleMobileMenu = () => {
        setMobileActive(!mobileActive);
    };

    const closeMobileMenu = () => {
        setMobileActive(false);
    };

    return (
        <>
            <nav className="navbar" style={{ background: getNavBackground() }}>

                <div className="nav-links">
                    <a href="#about" className="nav-link">ABOUT</a>
                    <a href="#experience" className="nav-link">EXPERIENCE</a>
                    <a href="#projects" className="nav-link">PROJECTS</a>
                    <a href="#education" className="nav-link">EDUCATION</a>
                    <a href="#contact" className="nav-link">CONTACT</a>
                </div>

                <a href="#" className="nav-btn resume-btn">RESUME</a>

                <button
                    className="theme-toggle"
                    id="themeToggle"
                    aria-label="Toggle theme"
                    onClick={toggleTheme}
                >
                    {theme === 'light' ? (
                        <svg className="moon-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    ) : (
                        <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    )}
                </button>

                <div
                    className={`mobile-menu-btn ${mobileActive ? 'active' : ''}`}
                    id="mobileMenuBtn"
                    onClick={toggleMobileMenu}
                >
                    <span style={mobileActive ? { transform: 'rotate(45deg) translate(6px, 6px)' } : {}}></span>
                    <span style={mobileActive ? { opacity: 0 } : {}}></span>
                    <span style={mobileActive ? { transform: 'rotate(-45deg) translate(6px, -6px)' } : {}}></span>
                </div>
            </nav>

            <div className={`mobile-nav ${mobileActive ? 'active' : ''}`} id="mobileNav">
                <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>ABOUT</a>
                <a href="#experience" className="mobile-nav-link" onClick={closeMobileMenu}>EXPERIENCE</a>
                <a href="#projects" className="mobile-nav-link" onClick={closeMobileMenu}>PROJECTS</a>
                <a href="#education" className="mobile-nav-link" onClick={closeMobileMenu}>EDUCATION</a>
                <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>CONTACT</a>
                <a href="#" className="nav-btn resume-btn" onClick={closeMobileMenu}>RESUME</a>
            </div>
        </>
    );
};

export default Navbar;
