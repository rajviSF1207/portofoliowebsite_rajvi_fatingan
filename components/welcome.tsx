"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Welcome() {
    return (
        <div className="welcome-container">

            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Hi!, I'm Rajvi Fatingan
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                Welcome to my portfolio site :)
            </motion.p>

            <br/>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
            >
                <Link href="/about" className="see-more-btn">
                    See More →
                </Link>
            </motion.div>

        </div>
    );
}