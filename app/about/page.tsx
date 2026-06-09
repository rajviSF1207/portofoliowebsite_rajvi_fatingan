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
                {}
                <div className="about-text">
                    <h1>About Me</h1>

                    <p>
                        Hi <strong>Rajvi</strong>

                    </p>

                    <p>

                    </p>

                    <div className="tags">
                      <span></span>
                    </div>
                </div>

                {}
                <div className="image-scroll">
                    <div className="scroll-container">
                        <img src="/images/1.jpg" alt="project 1" />
                        <img src="/images/2.jpg" alt="project 2" />
                        <img src="/images/3.jpg" alt="project 3" />
                        <img src="/images/4.jpg" alt="project 4" />
                    </div>
                </div>
            </motion.div>
        </main>
    );
}