const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <h2 className="section-title" data-aos="fade-up">GET IN TOUCH</h2>
                <p className="contact-subtitle" data-aos="fade-up" data-aos-delay="100">
                    Have a project in mind? Let's create something extraordinary together.
                </p>

                <div className="contact-content">
                    <div className="contact-info" data-aos="fade-right" data-aos-delay="200">
                        <a href="mailto:ermunotsharma@gmail.com" className="contact-link email-link">
                            <span className="link-label">EMAIL</span>
                            <span className="link-value">emunotsharma@gmail.com</span>
                        </a>
                        <a href="tel:0754428128" className="contact-link phone-link">
                            <span className="link-label">PHONE</span>
                            <span className="link-value">0754428128</span>
                        </a>
                        <div className="contact-link location-link">
                            <span className="link-label">LOCATION</span>
                            <span className="link-value">Kampala, Kawempe, Uganda</span>
                        </div>
                    </div>

                    <div className="social-links" data-aos="fade-left" data-aos-delay="300">
                        <a href="#" className="social-link">
                            <span className="social-icon">IN</span>
                            <span>LINKEDIN</span>
                        </a>
                        <a href="#" className="social-link">
                            <span className="social-icon">IG</span>
                            <span>INSTAGRAM</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Large Name Footer */}
            <div className="footer-name" data-aos="fade-up">
                <h1>EMUNOT EMMANUEL</h1>
            </div>
        </section>
    );
};

export default Contact;
