"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="about-wrapper">
            <motion.div
                className="about-box"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="about-text">
                    <h1>Hello Reader,</h1>

                    <p>
                        I’m Rajvi Fatingan — a developer who likes building cool, fun but also usefull things on a web
                        application.
                    </p>

                    <p>
                        I mainly work with Angular, React/next.js and Spring Boot Java.
                        I’m focused on improving my skills and gaining more knowledge by building real projects
                        and making them better over time.
                    </p>

                    <p>
                        I’m the kind of developer who learns by building. I like experimenting, and improving the codes
                        until everything feels right and smooth to use.
                    </p>

                    <p>
                        I like a clean design, to share creative ideas, and turning random thoughts into functional and enjoyable projects.
                        i also love to make worthy project that could help others, think about education or translation or just something handy like in the pocket wardrobe.
                    </p>
                </div>

                <div className="image-scroll">
                    <div className="scroll-container">
                        <img src="/images/balloonme.jpg" alt="me with balloons" />
                        <img src="/images/waterme.jpg" alt="me on water bridge" />
                        <img src="/images/kermisme.jpg" alt="project 4" />
                    </div>
                </div>
            </motion.div>
        </main>
    );
}