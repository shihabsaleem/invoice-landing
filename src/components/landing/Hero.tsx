import { landingPageData } from '@/data/landing-content';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    const { hero } = landingPageData;

    return (
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-brand-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-8 shadow-sm animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                        <span className="text-slate-600 text-sm font-medium">{hero.badgeText}</span>
                    </div>

                    <h1
                        className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight"
                        dangerouslySetInnerHTML={{ __html: hero.title }}
                    />

                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {hero.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href={hero.primaryCta.link}
                            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group"
                        >
                            {/* Rendering path from data if needed, or using Lucide Icon if mapped */}
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d={hero.primaryCta.iconPath} />
                            </svg>
                            <span>{hero.primaryCta.text}</span>
                        </Link>
                        <Link
                            href={hero.secondaryCta.link}
                            className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 rounded-full font-semibold transition-all shadow-sm hover:shadow-md"
                        >
                            {hero.secondaryCta.text}
                        </Link>
                    </div>
                </div>

                {/* Abstract background elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none opacity-40">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-10 right-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>
            </div>

            {/* Preview Image Section */}
            <div className="max-w-6xl mx-auto px-4 relative z-20 mt-12 md:mt-20">
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-brand-500/10 blur-3xl rounded-full -z-10 pointer-events-none"></div>

                <div className="relative rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-2xl ring-1 ring-white/40 overflow-hidden">
                    {/* Window Header */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-white/50 border-b border-slate-100">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
                        </div>
                        <div className="ml-4 flex-1 max-w-2xl bg-slate-100/50 h-6 rounded-md border border-slate-200/50 flex items-center px-3">
                            <span className="text-xs text-slate-400">{hero.previewDomain}</span>
                        </div>
                    </div>

                    {/* Window Content */}
                    <div className="rounded-b-xl overflow-hidden relative group">
                        <img src={hero.previewImage} alt="Extension Interface" className="w-full h-auto block" />

                        {/* Floating Badge */}
                        <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20 transform hover:-translate-y-1 transition-transform duration-300">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-semibold text-slate-700">{hero.previewBadge}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
