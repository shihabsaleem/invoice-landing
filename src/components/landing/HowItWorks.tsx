export default function HowItWorks() {
    const { howItWorks } = landingPageData;

    return (
        <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-brand-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-blue-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">
                        {howItWorks.sectionTitle}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {howItWorks.mainTitle}
                    </h3>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Data Flow Line (Background) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-1 bg-slate-100 rounded-full overflow-hidden z-0">
                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-brand-600/20 via-blue-500/20 to-green-500/20"></div>
                        <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50 blur-sm animate-flow"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                        {howItWorks.steps.map((step, idx) => {
                            const Icon = iconMap[step.icon] || PenTool;

                            return (
                                <div key={idx} className="flex flex-col items-center text-center group">
                                    {/* Icon Circle */}
                                    <div className="relative mb-8">
                                        <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50 flex items-center justify-center relative z-10 group-hover:border-brand-200 group-hover:scale-110 transition-all duration-300">
                                            <Icon className="w-10 h-10 text-slate-400 group-hover:text-brand-600 transition-colors duration-300" />
                                        </div>

                                        {/* Step Number Badge */}
                                        <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-slate-900 border-4 border-white text-white text-xs font-bold flex items-center justify-center z-20 shadow-md">
                                            {idx + 1}
                                        </div>

                                        {/* Connector Arrow (Mobile only) */}
                                        {idx < howItWorks.steps.length - 1 && (
                                            <div className="md:hidden absolute -bottom-12 left-1/2 -translate-x-1/2 text-slate-300">
                                                <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow w-full max-w-sm">
                                        {/* Little notch arrow pointing up */}
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-slate-100 transform rotate-45"></div>

                                        <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

import { landingPageData } from '@/data/landing-content';
import { PenTool, Settings, Download } from 'lucide-react';

const iconMap: Record<string, any> = {
    PenTool,
    Settings,
    Download
};
