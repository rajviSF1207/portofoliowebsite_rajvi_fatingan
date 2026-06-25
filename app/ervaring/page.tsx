export default function Experience() {
    return (
        <main className="experience-wrapper">

            <section className="projects-section">
                <h2>Projects</h2>

                <div className="project-grid">

                    <div className="project-card">
                        <img src="./images/mydrobe.png" alt="wardrobe project" />

                        <strong>My Drobe</strong>

                        <p>A digital closet to save your items that has an AI assistant with purpose to give advice.
                        This project was made because i myself like fashion and at times my creativity is not there so now
                            i could ask for advice and keep track of my many items of clothes.</p>

                        <h4>Made with React, Next.js and Ollama model gemma2:2b</h4>

                        <a href="" className="btn">Go to project</a>
                    </div>

                    <div className="project-card">
                        <img src="./images/superspace.png" alt="spaceship project" />

                        <strong>Spaceship Reservation System</strong>

                        <p>An application where u can reserve a spot for your 'spaceship'. This project is Helldivers themed.
                            it was made in an challengeweek for school, was pretty fun</p>

                        <h4>Made with Angular and Spring boot</h4>

                        <a href="" className="btn">Go to project</a>
                    </div>

                    {/*<div className="project-card">*/}
                    {/*    <img src="...." alt="wardrobe project" />*/}

                    {/*    <strong>My Drobe</strong>*/}

                    {/*    <p>A digital closet to save your items that has an AI assistent with purpose to give advice.*/}
                    {/*        This project was made because i myself like fashion and at times my creativity is not there so now*/}
                    {/*        i could ask for advice and keep track of my many items of clothes.</p>*/}

                    {/*    <h4>Made with React, Next.js and Ollama model gemma2:2b</h4>*/}

                    {/*    <a href="" className="btn">Go to project</a>*/}
                    {/*</div>*/}

                </div>
            </section>

            <section className="skills-scroll">
                <h2>Skills</h2>

                <div className="skills-scroll-container">

                    <div className="skill-block">
                        <h3>Hard Skills</h3>
                        <div className="skills-row">
                            <span>Angular</span>
                            <span>React</span>
                            <span>Vue.js</span>
                            <span>Spring Boot</span>
                            <span>Java</span>
                            <span>TypeScript</span>
                            <span>MySQL</span>
                            <span>SCRUM</span>
                            <span>Python</span>
                            <span>HTML</span>
                            <span>Docker</span>
                            <span>GIT</span>
                        </div>
                    </div>

                    <div className="skill-block">
                        <h3>Soft Skills</h3>
                        <div className="skills-row">
                            <span>Problem solving</span>
                            <span>Teamwork</span>
                            <span>Communication</span>
                            <span>Creativity</span>
                            <span>Time management</span>
                        </div>
                    </div>

                </div>
            </section>

            <section className="cv-section">
                <h2>CV</h2>

                <p>Download or view my resume below</p>

                <a href="/cv.pdf" target="_blank" className="cv-button">
                    View / Download CV
                </a>
            </section>

        </main>
    );
}