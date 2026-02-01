import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import GoogleAdSense from "@/components/analytics/GoogleAdSense";
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity";
import CookieBanner from "@/components/analytics/CookieBanner";

const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
    display: 'swap',
});

// Define JSON-LD Structured Data
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Invoice by Jadbery',
    description: 'Create beautiful, branded invoices, estimates, and quotes directly from your browser.',
    url: 'https://invoice.shihabsaleem.site',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
    },
    author: {
        '@type': 'Organization',
        name: 'Jadbery',
        url: 'https://jadbery.com',
    },
};

export const metadata: Metadata = {
    metadataBase: new URL('https://invoice.shihabsaleem.site'),
    title: {
        default: "Invoice by Jadbery - Professional Invoice Generator",
        template: "%s | Invoice by Jadbery"
    },
    description: "Create beautiful, branded invoices, estimates, and quotes directly from your browser. No sign-up required. Free online invoice generator.",
    keywords: ["invoice generator", "free invoice maker", "online invoice", "estimate generator", "invoice template", "billing software"],
    authors: [{ name: "Jadbery", url: "https://jadbery.com" }],
    creator: "Jadbery",
    publisher: "Jadbery",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "Invoice by Jadbery - Professional Invoice Generator",
        description: "Create beautiful, branded invoices, estimates, and quotes directly from your browser. Free & Secure.",
        url: 'https://invoice.shihabsaleem.site',
        siteName: 'Invoice by Jadbery',
        images: [
            {
                url: '/assets/InvoiceOG.jpg',
                width: 1200,
                height: 630,
                alt: 'Invoice by Jadbery',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Invoice by Jadbery",
        description: "Professional Invoice Generator for Freelancers and Small Businesses.",
        creator: '@jadbery',
        images: ['/assets/InvoiceOG.jpg'],
    },
    icons: {
        icon: "/assets/icon.png",
        shortcut: "/assets/icon.png",
        apple: "/assets/icon.png",
    },
    verification: {
        google: "CSdXRkDwL9W7wsQUQPz9VwJY4xuD2Ni4RSnXbdqz5F4",
        yandex: "yandex_verification_token",
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <GoogleAnalytics GA_MEASUREMENT_ID="G-901BG54SSM" />
                <GoogleAdSense pId="ca-pub-2766481636707915" />
                <MicrosoftClarity />
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
                <CookieBanner />
            </body>
        </html>
    );
}
