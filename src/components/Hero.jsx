import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
    const stripsRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (stripsRef.current) {
                const scrollY = window.scrollY;
                // Tilt Effect: Rotate X based on scroll
                // At top (0), rotation is -5deg (initial style).
                // As we scroll down, we tilt it back or forward.
                // Let's implement specific request: "scroll up pictures tilts, reverse is true"

                // Base rotation -5deg Z. Add X rotation based on scroll.
                // Factor 0.1 means every 10px scroll = 1 degree tilt
                const tilt = scrollY * 0.15;

                stripsRef.current.style.transform = `perspective(1000px) rotate(-5deg) rotateX(${tilt}deg) translateY(${scrollY * 0.2}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero" id="hero">
            <div className="hero-image-container">
                <div className="hero-image">
                    {/* Spline 3D Scene */}
                    {/* Spline 3D Scene */}
                    {/* <Spline scene="https://prod.spline.design/eaa92ced-511a-4359-a342-74c69fca4010/scene.splinecode" /> */}

                    {/* Strips Masked Image */}
                    <div className="hero-strips-container" ref={stripsRef}>
                        <div className="image-strip" style={{ height: '30%' }}></div>
                        <div className="image-strip" style={{ height: '60%' }}></div>
                        <div className="image-strip" style={{ height: '90%' }}></div>
                        <div className="image-strip" style={{ height: '100%' }}></div>
                        <div className="image-strip" style={{ height: '80%' }}></div>
                        <div className="image-strip" style={{ height: '50%' }}></div>
                    </div>
                </div>
            </div>
            <div className="hero-content">
                <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
                    <span className="title-line">CREATIVE</span>
                    <span className="title-line accent">DESIGNER</span>
                    <span className="title-line">& IT SPECIALIST.</span>
                </h1>
            </div>
            <div className="hero-info" data-aos="fade-left" data-aos-delay="300">
                <p className="hero-description">
                    Innovative and hard-working Creative Designer and IT Specialist with
                    3 years of hands-on experience in Uganda's competitive graphics and
                    technology sectors. Proven expertise in Graphics Design, Digital Marketing,
                    and Computer Programming.
                </p>
                <h3 className="hero-tagline">MOVE PEOPLE, NOT JUST <span className="accent">SCREENS.</span></h3>
                <div className="hero-buttons">
                    <a href="mailto:ermunotsharma@gmail.com?subject=Let's%20Create%20Something%20Together"
                        className="btn btn-primary">
                        <span>LET'S COLLABORATE</span>
                        <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="mailto:ermunotsharma@gmail.com?subject=Hiring%20Inquiry" className="btn btn-secondary">
                        <span>HIRE ME</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
