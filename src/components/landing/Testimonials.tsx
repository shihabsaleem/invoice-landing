import { landingPageData } from '@/data/landing-content';
import { Quote } from 'lucide-react';
import Link from 'next/link';

export default function Testimonials() {
    const { testimonials } = landingPageData;

    return (
        <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-brand-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">
                        {testimonials.sectionTitle}
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                        {testimonials.mainTitle}
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        {testimonials.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Testimonial Cards */}
                    {testimonials.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <Quote className="absolute top-8 right-8 w-8 h-8 text-brand-100 group-hover:text-brand-200 transition-colors" />

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <p className="text-slate-700 text-lg leading-relaxed mb-6 font-medium">
                                    "{item.quote}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center text-brand-700 font-bold text-lg">
                                        {item.name.charAt(0)}
                                    </div>
                                    <div>
                                        {/* @ts-ignore */}
                                        {item.authorLink && item.authorLink !== '#' ? (
                                            <a
                                                // @ts-ignore
                                                href={item.authorLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-bold text-slate-900 text-base hover:text-brand-600 transition-colors block"
                                            >
                                                {item.name}
                                            </a>
                                        ) : (
                                            <p className="font-bold text-slate-900 text-base">{item.name}</p>
                                        )}
                                        <p className="text-sm text-slate-500 font-medium">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Decorative Card - Call to Action within Grid */}
                    <div className="relative bg-slate-900 p-8 rounded-3xl shadow-xl flex flex-col justify-center items-center text-center text-white overflow-hidden group">
                        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-brand-500 to-purple-600"></div>
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-500 rounded-full blur-3xl opacity-20"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-3">{testimonials.ctaCard.title}</h3>
                            <p className="text-slate-300 mb-6">{testimonials.ctaCard.description}</p>
                            <Link href={testimonials.ctaCard.buttonLink} className="inline-block bg-white text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-brand-50 transition-colors shadow-lg hover:scale-105 transform duration-200">
                                {testimonials.ctaCard.buttonText}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
