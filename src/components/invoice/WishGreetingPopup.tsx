"use client";

import { useEffect, useState } from "react";
import { X, Heart, PartyPopper } from "lucide-react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function WishGreetingPopup({ isOpen, onClose }: Props) {
    const [dontShowAgain, setDontShowAgain] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleClose = () => {
        if (dontShowAgain) {
            localStorage.setItem("hideGreeting", "true");
        }
        onClose();
    };

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-[150] flex items-center justify-center transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                onClick={handleClose}
            ></div>

            {/* Modal */}
            <div className={`bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 relative transform transition-all duration-300 ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"}`}>
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-6 text-brand-600">
                        <PartyPopper className="w-8 h-8" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">Invoice Generated!</h3>
                    <p className="text-slate-500 mb-8">
                        Your PDF has been successfully created and downloaded. We hope this helps your business grow even faster! 🚀
                    </p>

                    <button
                        onClick={handleClose}
                        className="w-full bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-brand-600/20 active:scale-95 mb-4"
                    >
                        Awesome, thanks!
                    </button>

                    <label className="flex items-center gap-2 text-sm text-slate-500 cursor-pointer hover:text-slate-700 transition-colors">
                        <input
                            type="checkbox"
                            checked={dontShowAgain}
                            onChange={(e) => setDontShowAgain(e.target.checked)}
                            className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                        />
                        Don't show this again
                    </label>
                </div>
            </div>
        </div>
    );
}
