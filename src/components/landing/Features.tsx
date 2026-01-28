import { landingPageData } from '@/data/landing-content';
import { Palette, FileText, Shield } from 'lucide-react';

const iconMap: Record<string, any> = {
    Palette,
    FileText,
    Shield
};

export default function Features() {
    const { features } = landingPageData;

    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">
                        {features.sectionTitle}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {features.mainTitle}
                    </h3>
                    <p className="text-slate-600 text-lg">
                        {features.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.items.map((item) => {
                        const Icon = iconMap[item.iconName] || FileText;

                        return (
                            <div
                                key={item.title}
                                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                            >
                                <div className={`w-12 h-12 ${item.iconColorClass} rounded-2xl flex items-center justify-center mb-6`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
