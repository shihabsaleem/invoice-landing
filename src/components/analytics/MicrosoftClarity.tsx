'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function MicrosoftClarity() {
    const [consentGiven, setConsentGiven] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (consent === 'accepted') {
            setConsentGiven(true);
        }

        // Listen for custom event if we want real-time update without reload
        const handleConsentUpdate = () => {
            if (localStorage.getItem('cookie-consent') === 'accepted') {
                setConsentGiven(true);
            }
        };

        window.addEventListener('cookie-consent-updated', handleConsentUpdate);
        return () => window.removeEventListener('cookie-consent-updated', handleConsentUpdate);
    }, []);

    if (!consentGiven) {
        return null;
    }

    return (
        <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "vagnr9uqrk");
                `,
            }}
        />
    );
}
