import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
                        <p className="text-slate-600 mb-6">Effective Date: January 29, 2026</p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-slate-600 mb-4">
                            By accessing or using the Invoice by Jadbery website and generator, you agree to be bound by these Terms of Service.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Content Ownership</h2>
                        <p className="text-slate-600 mb-4">
                            <strong>You own the content you generate.</strong> The invoices/documents created using this tool are your property. We lay no claim to the data or the final documents produced.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Use License</h2>
                        <p className="text-slate-600 mb-4">
                            Permission is granted to use the Invoice by Jadbery software for personal or commercial document generation.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Disclaimer</h2>
                        <p className="text-slate-600 mb-4">
                            The materials on Invoice by Jadbery's website are provided on an 'as is' basis. We make no warranties, expressed or implied, regarding the reliability or availability of the service.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Limitations</h2>
                        <p className="text-slate-600 mb-4">
                            In no event shall Invoice by Jadbery be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on our website.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Governing Law</h2>
                        <p className="text-slate-600 mb-4">
                            These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction of our incorporation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
