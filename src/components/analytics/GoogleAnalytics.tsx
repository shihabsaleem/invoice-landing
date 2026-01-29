'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
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
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
        </>
    );
}
