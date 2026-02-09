
import { landingPageData } from '@/data/landing-content';
import Link from 'next/link';

export default function CTA() {
    const { cta } = landingPageData;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-2xl">
                    {/* Background Glows */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full mix-blend-screen filter blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl"></div>
                    </div>

                    <div className="relative z-10 px-6 py-16 md:py-20 lg:px-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                                {cta.title}
                            </h2>
                            <p className="text-lg md:text-xl text-slate-300 mb-0">
                                {cta.description}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                            <Link
                                href={landingPageData.navbar.ctaLink}
                                className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-brand-500/30 whitespace-nowrap text-center"
                            >
                                {cta.buttonText}
                            </Link>
                            <Link
                                href={cta.secondaryButtonLink}
                                className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-full font-semibold text-lg transition-all whitespace-nowrap text-center"
                            >
                                {cta.secondaryButtonText}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
