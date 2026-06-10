"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
    const pathname = usePathname();

    return (
        <motion.header
            className="header"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="logo">
                <Link href="/about">About me</Link>
            </div>

            <nav className="nav">
                <Link
                    href="/about"
                    className={pathname === "/about" ? "active" : ""}
                >
                    About
                </Link>

                <Link
                    href="/ervaring"
                    className={pathname === "/ervaring" ? "active" : ""}
                >
                    Experience
                </Link>

                <Link
                    href="/extra"
                    className={pathname === "/extra" ? "active" : ""}
                >
                    Extra
                </Link>

                <Link
                    href="/taal"
                    className={pathname === "/taal" ? "active" : ""}
                >
                    Languages
                </Link>
            </nav>
        </motion.header>
    );
}