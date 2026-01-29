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
            {children}
        </>
    );
}
