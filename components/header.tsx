"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <motion.header
            className="header"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {}
            <div className="logo">
                Rajvi.dev
            </div>

            {}
            <nav className="nav">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/ervaring">Experience</Link>
                <Link href="/extra">Extra</Link>
            </nav>
        </motion.header>
    );
}