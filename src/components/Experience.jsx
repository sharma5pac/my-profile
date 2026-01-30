const Experience = () => {
    return (
        <section className="experience" id="experience" style={{ padding: '100px 5%', background: 'var(--bg-secondary)' }}>
            <h2 className="section-title" data-aos="fade-up">WORK EXPERIENCE</h2>
            <div className="timeline-container"
                style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {/* Experience Item 1 */}
                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100"
                    style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '40px', borderRadius: '20px', borderLeft: '4px solid #00d4ff' }}>
                    <div className="job-header"
                        style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '20px' }}>
                        <div>
                            <h3 className="job-role"
                                style={{ fontFamily: "'Staatliches', cursive", fontSize: '1.8rem', letterSpacing: '1px' }}>
                                Computer Programmer & Creative Designer</h3>
                            <span className="job-company" style={{ color: '#00d4ff', fontSize: '1.1rem', fontWeight: 600 }}>Tech
                                Crunch Limited, Kampala</span>
                        </div>
                        <div className="job-date" style={{ color: '#a0a0a0', fontSize: '1rem', alignSelf: 'center' }}>Present</div>
                    </div>
                    <ul className="job-points" style={{ color: '#a0a0a0', paddingLeft: '20px', lineHeight: 1.8 }}>
                        <li>Designed and executed creative motion graphics and visual assets for client projects using Adobe
                            Creative Suite and CapCut.</li>
                        <li>Managed social media content scheduling and analyzed engagement data using Meta Business Suite.
                        </li>
                        <li>Assisted in computer programming tasks and website editing, ensuring functional and visual
                            quality.</li>
                        <li>Collaborated with the design team to brainstorm concepts and deliver projects on strict
                            deadlines.</li>
                        <li>Utilized AI analysis tools to improve design efficiency and data handling.</li>
                        <li>Developed strong troubleshooting skills for computer hardware and software issues.</li>
                    </ul>
                </div>

                {/* Experience Item 2 */}
                <div className="timeline-item" data-aos="fade-up" data-aos-delay="200"
                    style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '40px', borderRadius: '20px', borderLeft: '4px solid #00d4ff' }}>
                    <div className="job-header"
                        style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '20px' }}>
                        <div>
                            <h3 className="job-role"
                                style={{ fontFamily: "'Staatliches', cursive", fontSize: '1.8rem', letterSpacing: '1px' }}>
                                Graphics Designer & Printing</h3>
                            <span className="job-company" style={{ color: '#00d4ff', fontSize: '1.1rem', fontWeight: 600 }}>Nasser
                                Road, Kampala</span>
                        </div>
                    </div>
                    <ul className="job-points" style={{ color: '#a0a0a0', paddingLeft: '20px', lineHeight: 1.8 }}>
                        <li>Worked in a fast-paced environment handling high-volume graphics design and printing orders.
                        </li>
                        <li>Provided expert Microsoft Word and typesetting services for professional documents and academic
                            papers.</li>
                        <li>Managed customer requirements directly, ensuring accurate formatting and timely delivery of
                            printed materials.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
