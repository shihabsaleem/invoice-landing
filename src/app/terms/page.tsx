import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { landingPageData } from "@/data/landing-content";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="max-w-3xl mx-auto px-4">
                <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-600 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>

                    <div className="prose prose-slate max-w-none">
                        <p className="text-slate-600 mb-6">Effective Date: {landingPageData.termsOfService.effectiveDate}</p>

                        {landingPageData.termsOfService.sections.map((section, index) => (
                            <div key={index} className="mb-8">
                                <h2 className="text-xl font-bold text-slate-900 mb-4">{section.title}</h2>
                                <p
                                    className="text-slate-600 mb-4"
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
