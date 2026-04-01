import Link from 'next/link';
import { landingPageData } from '@/data/landing-content';

export default function Footer() {
    const { footer } = landingPageData;

    return (
        <footer className="bg-slate-900 text-white py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                {/* Footer Logo Removed */}

                <h2 className="text-3xl md:text-5xl font-bold mb-8">{footer.title}</h2>

                {/* CTA Buttons Removed as per user request */}

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
