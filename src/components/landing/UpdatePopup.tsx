"use client";

import { useState, useEffect } from "react";
import { X, BellRing, CheckCircle2, ArrowRight } from "lucide-react";
import { createPortal } from "react-dom";

export default function UpdatePopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setTimeout(() => {
            const hasSeenUpdate = localStorage.getItem("hasSeenLogoUpdate_v2");
            if (!hasSeenUpdate) {
                setIsOpen(true);
            }
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem("hasSeenLogoUpdate_v2", "true");
    };

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md animate-in fade-in duration-500">
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 transition-all border border-slate-100">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-50 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
                
                {/* Close Button */}
                <button 
                    onClick={handleClose} 
                    className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-all text-slate-400 hover:text-slate-600 z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="relative p-8 md:p-12 flex flex-col items-center text-center">
                    {/* Icon Header */}
                    <div className="mb-8 relative">
                        <div className="absolute inset-0 bg-brand-500/20 blur-2xl rounded-full scale-150 animate-pulse" />
                        <div className="relative w-20 h-20 bg-brand-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-200 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                            <BellRing className="w-10 h-10" />
                        </div>
                    </div>

                    <div className="space-y-4 max-w-sm">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            System Update
                        </div>
                        <h4 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-slate-600 tracking-tight leading-tight">
                            Fresh New Look
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                            We've refined our interface for a more minimal experience. The <span className="font-semibold text-slate-900">footer logo</span> has been removed to streamline the design.
                        </p>
                    </div>

                    <div className="mt-10 w-full">
                        <button
                            onClick={handleClose}
                            className="group relative w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
                        >
                            <span className="relative z-10">Got it, thanks!</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                            {/* Shiny effect */}
                            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </button>
                    </div>

                    <p className="mt-6 text-sm text-slate-400">
                        Version 2.1.0 • Build 2026.04
                    </p>
                </div>
            </div>
        </div>,
        document.body
    );
}
