import Link from 'next/link';
import { landingPageData } from '@/data/landing-content';

export default function Footer() {
    const { footer } = landingPageData;

    return (
        <footer className="bg-slate-900 text-white py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                {/* Footer Logo */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white px-6 py-3 rounded-2xl shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                        <img src={footer.logo} alt="Logo" className="h-8 md:h-10" />
                    </div>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-8">{footer.title}</h2>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href={footer.ctaLink}
                        className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-brand-500/50"
                    >
                        {footer.ctaText}
                    </Link>
                    <Link
                        href={footer.chromeCtaLink}
                        className="px-8 py-4 border border-slate-700 hover:border-white hover:bg-white hover:text-slate-900 text-white rounded-full font-semibold text-lg transition-all"
                    >
                        {footer.chromeCtaText}
                    </Link>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
                    <p dangerouslySetInnerHTML={{ __html: footer.copyright }} />
                    <div className="flex gap-6 mt-4 md:mt-0">
                        {footer.links.map((link) => (
                            <Link
                                key={link.text}
                                href={link.href}
                                className="hover:text-white transition-colors"
                            >
                                {link.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
