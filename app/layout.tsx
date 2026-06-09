import "./globals.css";
import LayoutContent from "@/components/LayoutContent";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <LayoutContent>
            {children}
        </LayoutContent>
        </body>
        </html>
    );
}