"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {usePathname} from "next/navigation";

type PagePath = "/ervaring";

export default function AboutPage() {
    const pathname = usePathname();

    const pageTitles: Record<PagePath, string> = {
        "/ervaring": "Experience",
    }

    return (
        <main className="about-wrapper">
            <motion.div
                className="about-box"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="about-text">
                    <h1>Hello Hello :) </h1>
                    <br/>

                    <p>
                        I’m Rajvi Fatingan, a developer who is currently into building web applications.
                        I like working on things that are both useful and enjoyable to use.
                    </p>
                    <p>
                        I mainly work with Angular, Vue, React / Next.js, Python and Spring Boot (Java).
                        I would love to improve my skills by building more projects.
                    </p>
                    <p>
                        I usually learn by just building stuff and figuring things out as I go.
                    </p>
                    <p>
                        I like to use creativity in designs but make it suit the project.
                        I enjoy turning ideas into working projects.
                    </p>
                    <br/>
                    <p>
                        Outside working i enjoy taking walks, travel around and explore places but also do this with others that are close to me.
                        I enjoy being there for others and going to social occasions.
                    </p>
                    <br/>
                    <h2> <strong> More information </strong> </h2>
                    <p>To see more about me and the projects i made you can click on the experience button and Have fun!</p>

                    <div className="experience-cta">
                        <p>Want to know more about me?</p>

                        <a
                            href="/ervaring"
                            className={`experience-btn ${pathname === "/ervaring" ? "active" : ""}`}
                        >
                            Go to my experience
                            <span>→</span>
                        </a>
                    </div>

                </div>

                <div className="image-scroll">
                    <div className="scroll-container">
                        <img src="/images/balloonme.jpg" alt="me with balloons" />
                        <img src="/images/pulaarename.jpeg" alt="pula" />
                        <img src="/images/kermisme.jpg" alt="kermis" />
                        <img src="/images/reijekacastleme.jpeg" alt="castle" />

                    </div>
                </div>
            </motion.div>
        </main>
    );
}