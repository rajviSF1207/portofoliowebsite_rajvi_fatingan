export default function Extra() {
    return (
        <main className="extra-wrapper">

            <section className="extra-card">
                <h1>Behind This Portfolio</h1>

                <p>
                    This portfolio was created to showcase my projects, skills,
                    and development journey. It serves as a place where I can
                    present my work, experiment with design ideas, and continue
                    improving my frontend and backend development skills.
                </p>
            </section>

            <section className="extra-card">
                <h2>Technologies Used</h2>

                <div className="tech-grid">
                    <span>Next.js</span>
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Framer Motion</span>
                    <span>CSS</span>
                    <span>GitHub</span>
                    <span>Docker</span>
                </div>
            </section>

            <section className="extra-card">
                <h2>Hosting & Deployment</h2>

                <p>
                    The portfolio is developed using Next.js and managed through
                    GitHub and a Dockerhub pipeline. This allows me to track changes, maintain
                    different versions of the project, and continuously improve
                    the website over time.
                </p>

                <p>
                    The site is deployed online, making it accessible from
                    anywhere while providing a practical example of my web
                    development skills.
                </p>
            </section>

            <section className="extra-card">
                <h2>Design Choices</h2>

                <p>
                    I chose a purple color palette combined with soft neutral
                    tones to create a balance between professionalism and
                    personality. The design focuses on readability, simplicity,
                    and a clean user experience.
                </p>

                <p>
                    Animations are used subtly throughout the website to create
                    a smoother and more engaging experience without distracting
                    from the content.
                </p>
            </section>

            <section className="extra-card">
                <h2>Future Improvements</h2>

                <ul>
                    <li>Adding more projects to showcase</li>
                    <li>Improving the pages</li>
                    <li>Improving my projects</li>
                    <li>Expanding technical documentation</li>
                    <li>Creating an language switch button</li>
                    <li>Creating additional interactive features</li>
                    <li>Continuing to improve accessibility and responsiveness</li>
                </ul>
            </section>

        </main>
    );
}