"use client";

import Link from 'next/link';
import { landingPageData } from '@/data/landing-content';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const { navbar } = landingPageData;
    const pathname = usePathname();
    const isGeneratorPage = pathname === '/generator';

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center gap-3">
                        {/* Using a standard img tag for now if asset path is tricky, or next/image if configured */}
                        <img
                            id="nav-logo"
                            src={navbar.logo}
                            alt="Logo"
                            className="h-8 w-8"
                        />
                    </Link>

                    {!isGeneratorPage && (
                        <div id="nav-links" className="hidden md:flex space-x-8">
                            {navbar.links.map((link) => (
                                <Link
                                    key={link.text}
                                    href={link.href}
                                    className="text-slate-600 hover:text-brand-600 transition-colors"
                                >
                                    {link.text}
                                </Link>
                            ))}
                        </div>
                    )}

                    <div className="flex items-center gap-3">
                        {!isGeneratorPage && (
                            <Link
                                href={navbar.chromeCtaLink}
                                className="hidden sm:block text-slate-600 hover:text-brand-600 font-medium text-sm px-4 py-2 transition-colors"
                            >
                                {navbar.chromeCtaText}
                            </Link>
                        )}
                        <Link
                            id="nav-cta"
                            href={isGeneratorPage ? navbar.chromeCtaLink : navbar.ctaLink}
                            target={isGeneratorPage ? "_blank" : undefined}
                            className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/40 text-sm"
                        >
                            {isGeneratorPage ? navbar.chromeCtaText : navbar.ctaText}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
