const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-title-wrapper" data-aos="fade-right">
                    <h2 className="section-title vertical">ABOUT ME</h2>
                </div>
                <div className="about-content" data-aos="fade-up" data-aos-delay="200">
                    <p className="about-text">
                        <span className="highlight">Hello! I'm Emunot Sharma Emmanuel,</span> a Creative Designer & IT
                        Specialist
                        based in Kampala, Kawempe, Uganda. I demonstrate strong leadership and problem-solving
                        abilities with a commitment to delivering high-quality results.
                    </p>
                    <p className="about-text">
                        I have a background in high-volume document processing and technical design work,
                        with expertise across multiple domains:
                    </p>

                    {/* Skills Grid */}
                    <div style={{ margin: '30px 0' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#00d4ff', fontFamily: "'Staatliches', cursive", fontSize: '1.1rem', marginBottom: '10px', letterSpacing: '1px' }}>
                                DESIGN & MEDIA</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                <span className="tech-tag">Graphics Design</span>
                                <span className="tech-tag">Motion Graphics</span>
                                <span className="tech-tag">Video Editing</span>
                                <span className="tech-tag">Adobe Creative Suite</span>
                                <span className="tech-tag">Canva</span>
                                <span className="tech-tag">CapCut & InShot</span>
                                <span className="tech-tag">High Typing Speed</span>
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#00d4ff', fontFamily: "'Staatliches', cursive", fontSize: '1.1rem', marginBottom: '10px', letterSpacing: '1px' }}>
                                TECH & AI</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                <span className="tech-tag">AI Analysis</span>
                                <span className="tech-tag">Light weight Computer Programming</span>
                                <span className="tech-tag">Web Editin & Designing</span>
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#00d4ff', fontFamily: "'Staatliches', cursive", fontSize: '1.1rem', marginBottom: '10px', letterSpacing: '1px' }}>
                                DIGITAL MARKETING</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                <span className="tech-tag">Google Analytics</span>
                                <span className="tech-tag">Meta Business Suite</span>
                                <span className="tech-tag">Social Media Management</span>
                                <span className="tech-tag">Content Strategy & Creation</span>
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#00d4ff', fontFamily: "'Staatliches', cursive", fontSize: '1.1rem', marginBottom: '10px', letterSpacing: '1px' }}>
                                OFFICE & CLOUD TOOLS</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                <span className="tech-tag">Microsoft Word</span>
                                <span className="tech-tag">Microsoft Access</span>
                                <span className="tech-tag">Microsoft PowerPoint</span>
                                <span className="tech-tag">Microsoft Outlook</span>
                                <span className="tech-tag">Google Docs Editor</span>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ color: '#00d4ff', fontFamily: "'Staatliches', cursive", fontSize: '1.1rem', marginBottom: '10px', letterSpacing: '1px' }}>
                                SOFT SKILLS</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                <span className="tech-tag">Leadership</span>
                                <span className="tech-tag">Communication</span>
                                <span className="tech-tag">Problem-solving</span>
                                <span className="tech-tag">Teamwork & Time Management</span>
                                <span className="tech-tag">Religious</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">20+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">2+</span>
                            <span className="stat-label">Major Roles</span>
                        </div>
                    </div>
                </div>
                <div className="about-image" data-aos="fade-left" data-aos-delay="300">
                    <img src="/about-profile.png" alt="Emunot Sharma Emmanuel" className="profile-photo" />
                </div>
            </div>
            <div className="fun-fact" data-aos="zoom-in">
                <h3>MY PHILOSOPHY</h3>
                <p>"I create things that look simple, but feel alive."</p>
            </div>
        </section>
    );
};

export default About;
