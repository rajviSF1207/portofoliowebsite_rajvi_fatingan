"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type PagePath = "/about" | "/ervaring" | "/extra" | "/taal";

export default function Header() {
    const pathname = usePathname();

    const pageTitles: Record<PagePath, string> = {
        "/about": "About Me",
        "/ervaring": "Experience",
        "/extra": "Extra",
        "/taal": "Languages",
    };

    const title =
        pageTitles[pathname as PagePath] || "Portfolio";

    return (
        <motion.header
            className="header"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Link href="/about" className="logo">
                <span className="name">Rajvi Fatingan</span>
                <span className="page-title">{title}</span>
            </Link>

            <nav className="nav">
                <Link href="/about" className={pathname === "/about" ? "active" : ""}>
                    About
                </Link>

                <Link href="/ervaring" className={pathname === "/ervaring" ? "active" : ""}>
                    Experience
                </Link>

                <Link href="/extra" className={pathname === "/extra" ? "active" : ""}>
                    Extra
                </Link>

                <Link href="/taal" className={pathname === "/taal" ? "active" : ""}>
                    Languages
                </Link>
            </nav>
        </motion.header>
    );
}