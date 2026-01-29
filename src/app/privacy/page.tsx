import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="max-w-3xl mx-auto px-4">
                <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-600 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

                    <div className="prose prose-slate max-w-none">
                        <p className="text-slate-600 mb-6">Effective Date: January 29, 2026</p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
                        <p className="text-slate-600 mb-4">
                            We operate on a "Privacy First" principle. <strong>We do not collect any personal data from you.</strong>
                            All data you enter into the Invoice Generator (including company details, client information, and invoice items) is stored locally on your device using your browser's Local Storage.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Information</h2>
                        <p className="text-slate-600 mb-4">
                            Since we do not collect your information, we do not use, share, or sell it. The data remains strictly on your device for your convenience (e.g., to reload your previous invoice).
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Data Security</h2>
                        <p className="text-slate-600 mb-4">
                            Your data security is managed by your browser's security protocols. We generally recommend that you do not use public computers to generate sensitive financial documents, as local storage may persist on shared devices.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Third-Party Services</h2>
                        <p className="text-slate-600 mb-4">
                            We use <strong>Google Analytics 4</strong> to understand anonymous website traffic and usage patterns (e.g., usage of features). This helps us improve the user experience. You can opt-out of cookie tracking via the banner on our site. These tools do not have access to the specific content of your invoices.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Contact Us</h2>
                        <p className="text-slate-600 mb-4">
                            If you have any questions about this Privacy Policy, please contact us at support@jadbery.com.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
