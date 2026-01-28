import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Invoice by jadbery - Professional Invoice Generator",
    description: "Create beautiful, branded invoices, estimates, and quotes directly from your browser. No sign-up required.",
    icons: {
        icon: "/assets/icon.png",
        shortcut: "/assets/icon.png",
        apple: "/assets/icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${quicksand.variable} font-sans antialiased text-slate-800 bg-white selection:bg-brand-100 selection:text-brand-900`}>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
