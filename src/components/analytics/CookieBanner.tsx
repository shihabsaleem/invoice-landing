'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (consent === null) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
        // Dispatch event to notify Analytics component
        window.dispatchEvent(new Event('cookie-consent-updated'));
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 animate-in slide-in-from-bottom duration-300">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-600">
                    <p>
                        We use cookies to improve your experience and analyze site traffic.
                        By clicking "Accept", you verify that you are happy with our use of analytics cookies.
                    </p>
                </div>
                <div className="flex gap-3 shrink-0">
                    <button
                        onClick={handleDecline}
                        className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors"
                    >
                        Decline
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 transition-colors"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}
