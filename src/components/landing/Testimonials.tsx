import { landingPageData } from '@/data/landing-content';
import { Quote } from 'lucide-react';

export default function Testimonials() {
    const { testimonials } = landingPageData;

    return (
        <section id="testimonials" className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-brand-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                        Loved by freelancers.
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Join thousands of professionals who trust us with their billing.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Add a dummy 3rd testimonial to balance the grid if needed, or stick to data */}
                    {testimonials.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-white/60 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <Quote className="absolute top-8 right-8 w-10 h-10 text-brand-100 group-hover:text-brand-200 transition-colors" />

                            <div className="relative z-10 h-full flex flex-col justify-around content-between">
                                <p className="text-slate-700 text-lg leading-relaxed mb-8 font-medium">
                                    "{item.quote}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center text-brand-700 font-bold text-lg shadow-inner ring-2 ring-white">
                                        {item.name.charAt(0)}
                                    </div>
                                    <div>
                                        {/* @ts-ignore */}
                                        {item.authorLink ? (
                                            <a
                                                // @ts-ignore
                                                href={item.authorLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-bold text-slate-900 text-base hover:text-brand-600 transition-colors"
                                            >
                                                {item.name}
                                            </a>
                                        ) : (
                                            <p className="font-bold text-slate-900 text-base">{item.name}</p>
                                        )}
                                        <p className="text-sm text-brand-600 font-medium tracking-wide uppercase">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Decorative Card - Call to Action within Grid */}
                    <div className="relative bg-gradient-to-br from-brand-600 to-brand-700 p-8 rounded-2xl shadow-xl shadow-brand-500/30 flex flex-col justify-center items-center text-center text-white overflow-hidden group">
                        <div className="absolute inset-0 opacity-20 transform scale-150 group-hover:scale-125 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2">{testimonials.ctaCard.title}</h3>
                            <p className="text-brand-100 mb-6">{testimonials.ctaCard.description}</p>
                            <a href={testimonials.ctaCard.buttonLink} className="inline-block bg-white text-brand-600 px-6 py-3 rounded-full font-bold hover:bg-brand-50 transition-colors shadow-lg">
                                {testimonials.ctaCard.buttonText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
