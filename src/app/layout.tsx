import NavigationBar from "./_components/NavigationBar";
import Footer from "./_components/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Digital Digitizers" };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <NavigationBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
