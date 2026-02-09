
"use client";

import { landingPageData } from '@/data/landing-content';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
    const { faq } = landingPageData;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">
                        {faq.sectionTitle}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                        {faq.mainTitle}
                    </h3>
                </div>

                <div className="space-y-4">
                    {faq.items.map((item, idx) => (
                        <div
                            key={idx}
                            className={`border rounded-2xl transition-all duration-300 ${openIndex === idx
                                ? 'border-brand-200 bg-brand-50/30'
                                : 'border-slate-200 hover:border-brand-200'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(idx)}
                                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-slate-900">
                                    {item.question}
                                </span>
                                <span className={`ml-4 flex-shrink-0 text-brand-600 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                                    {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </span>
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-slate-600 leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
