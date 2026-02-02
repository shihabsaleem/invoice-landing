import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free Invoice Generator | Create Professional PDF Invoices",
    description: "Create, edit, and download professional invoices instantly. No account required. 100% Free & Secure.",
    alternates: {
        canonical: '/generator',
    },
};

export default function GeneratorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebApplication',
                        name: 'Free Invoice Generator',
                        url: 'https://invoice.shihabsaleem.site/generator',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Any',
                        offers: {
                            '@type': 'Offer',
                            price: '0',
                            priceCurrency: 'USD',
                        },
                        featureList: 'PDF Export, Local Storage, No Sign-up, Offline Capable',
                    }),
                }}
            />
            {children}
        </>
    );
}
