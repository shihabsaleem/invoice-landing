import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 overflow-hidden relative">
            {/* Abstract Background Blobs - matching Hero styling */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none opacity-40">
                <div className="absolute top-20 left-10 w-96 h-96 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-40 right-10 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="text-center relative z-10 max-w-lg mx-auto">
                <div className="mb-8 relative inline-block">
                    <h1 className="text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-orange-500 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute -bottom-4 -right-12 bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 rotate-12 animate-fade-in-up">
                        <span className="text-2xl">🧐</span>
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Page not found</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    The invoice you are looking for might have been misplaced, or possibly archived in a different folder.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-semibold shadow-lg shadow-brand-500/20 transition-all hover:-translate-y-1"
                    >
                        Back to Home
                    </Link>
                    <Link
                        href="/generator"
                        className="px-8 py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-full font-semibold transition-all hover:-translate-y-1"
                    >
                        Create New Invoice
                    </Link>
                </div>
            </div>
        </div>
    );
}
