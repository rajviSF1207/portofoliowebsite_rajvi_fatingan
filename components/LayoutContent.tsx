"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function LayoutContent({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const showHeader = pathname !== "/";

    return (
        <>
            {showHeader && <Header />}

            <main>{children}</main>

            {showHeader && <Footer />}
        </>
    );
}