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
                    <h1>About Me</h1>

                    <p>
                        Hi my name is Rajvi Fatingan and ....
                    </p>

                    <p>
                        {/* extra text */}
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