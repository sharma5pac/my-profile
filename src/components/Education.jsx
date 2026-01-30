const Education = () => {
    return (
        <section className="education" id="education" style={{ padding: '100px 5%' }}>
            <h2 className="section-title" data-aos="fade-up">EDUCATION</h2>
            <div className="recognition-grid">
                <div className="recognition-card" data-aos="flip-left" data-aos-delay="100">
                    <div className="recognition-icon">🎓</div>
                    <h3>UACE - A Level</h3>
                    <p>Kyadondo Secondary School</p>
                    <div style={{ fontSize: '0.9rem', color: '#00d4ff', marginTop: '10px' }}>Physics, Economics, Mathematics,
                        General Paper & ICT</div>
                </div>
                <div className="recognition-card" data-aos="flip-left" data-aos-delay="200">
                    <div className="recognition-icon">📚</div>
                    <h3>UCE - O Level</h3>
                    <p>Kawempe Muslim Secondary School</p>
                    <div style={{ fontSize: '0.9rem', color: '#00d4ff', marginTop: '10px' }}>Uganda Certificate of Education</div>
                </div>
                <div className="recognition-card" data-aos="flip-left" data-aos-delay="300">
                    <div className="recognition-icon">📜</div>
                    <h3>Certificate</h3>
                    <p>Tech Crunch Limited - Kyato Complex</p>
                    <div style={{ fontSize: '0.9rem', color: '#00d4ff', marginTop: '10px' }}>Designing, WordPress & Programming
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
