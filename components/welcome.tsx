"use client";

import { motion } from "framer-motion";

export default function Welcome() {
    return (
        <div className="h-screen flex items-center justify-center flex-col">

            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-bold"
            >
                Welcome to my portfolio
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-lg mt-4"
            >
                I am a web developer
            </motion.p>

        </div>
    );
}