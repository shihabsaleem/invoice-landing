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
                        <p className="text-slate-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-slate-600 mb-4">
                            By accessing or using the Invoice by jadbery website and generator, you agree to be bound by these Terms of Service.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Use License</h2>
                        <p className="text-slate-600 mb-4">
                            Permission is granted to temporarily download one copy of the materials (information or software) on Invoice by jadbery's website for personal, non-commercial transitory viewing only.
                            This is the grant of a license, not a transfer of title.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Disclaimer</h2>
                        <p className="text-slate-600 mb-4">
                            The materials on Invoice by jadbery's website are provided on an 'as is' basis. Makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Limitations</h2>
                        <p className="text-slate-600 mb-4">
                            In no event shall Invoice by jadbery or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Invoice by jadbery's website.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Governing Law</h2>
                        <p className="text-slate-600 mb-4">
                            These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
