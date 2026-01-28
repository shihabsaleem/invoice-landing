export const landingPageData = {
    navbar: {
        logo: "/assets/icon.svg",
        brandName: "Invoice by jadbery",
        links: [
            { text: "Features", href: "#features" },
            { text: "How it Works", href: "#how-it-works" },
            { text: "Testimonials", href: "#testimonials" }
        ],
        ctaText: "Create Invoice Now",
        ctaLink: "/generator",
        chromeCtaText: "Chrome Extension",
        chromeCtaLink: "https://chromewebstore.google.com/detail/invoice-by-jadbery/fcdjehhdacfdkflfjapeoagfddedjgaj"
    },
    hero: {
        badgeText: "100% Free & Offline-First",
        title: "Professional Invoices <br /> <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-500'>Made Simple.</span>",
        description: "Create beautiful, branded invoices, estimates, and quotes directly from your browser. No sign-up required. Data stays on your device.",
        primaryCta: {
            text: "Create Invoice Now",
            link: "/generator",
            iconPath: "M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm0 10.909l-3.273 5.455H2.182l5.455-9.273L12 10.909zM12 2.182c1.864 0 3.593.475 5.114 1.295l-3.477 6.023h-8.73c1.67-4.321 5.093-7.318 7.093-7.318zm7.318 6.545h-6.545l3.273 5.727 3.272-5.727c0 0 .091.682.091 1.636 0 5.034-3.818 9.148-8.727 9.773l5.034-8.727c1.782-1.375 2.927-3.045 2.927-4.886 0-1.841-1.145-3.511-2.927-4.886z"
        },
        secondaryCta: {
            text: "Chrome Extension",
            link: "https://chromewebstore.google.com/detail/invoice-by-jadbery/fcdjehhdacfdkflfjapeoagfddedjgaj"
        },
        previewImage: "/assets/preview.jpg",
        previewBadge: "Generated in 0.5s",
        previewDomain: "invoice.jadbery.com"
    },
    features: {
        sectionTitle: "All the features you need",
        mainTitle: "Everything to get paid faster.",
        description: "Powerful features packed into a lightweight browser extension. No bloat, just business.",
        items: [
            {
                iconColorClass: "bg-blue-100 text-blue-600",
                iconName: "Palette",
                title: "Custom Branding",
                description: "Upload your logo and pick your brand colors. Make every invoice look like it came from a Fortune 500 company."
            },
            {
                iconColorClass: "bg-purple-100 text-purple-600",
                iconName: "FileText",
                title: "Multi-Format Support",
                description: "Need a Quote? Or an Estimate? Switch document types instantly. We support Invoices, Receipts, and more."
            },
            {
                iconColorClass: "bg-green-100 text-green-600",
                iconName: "Shield",
                title: "Privacy First",
                description: "No servers. No tracking. All your client data and invoice history is stored securely on your own device."
            }
        ]
    },
    testimonials: {
        items: [
            {
                name: "Sarah J.",
                role: "Graphic Designer",
                quote: "\"The best part is I don't need to login to some slow website. I just click the extension, fill it out, and boom—PDF ready in seconds.\""
            },
            {
                name: "Mike R.",
                role: "Consultant",
                quote: "\"Finally, an invoice tool that doesn't try to upsell me. Clean, fast, and the branding options are perfect.\""
            }
        ],
        ctaCard: {
            title: "You're next!",
            description: "Start creating professional invoices today.",
            buttonText: "Create Invoice",
            buttonLink: "/generator"
        }
    },
    footer: {
        title: "Ready to look professional?",
        logo: "/assets/logo.svg",
        ctaText: "Create Invoice Now",
        ctaLink: "/generator",
        chromeCtaText: "Chrome Extension",
        chromeCtaLink: "https://chromewebstore.google.com/detail/invoice-by-jadbery/fcdjehhdacfdkflfjapeoagfddedjgaj",
        copyright: "© 2026 Invoice by jadbery. All rights reserved.",
        links: [
            { text: "Privacy Policy", href: "/privacy" },
            { text: "Terms of Service", href: "/terms" },
            { text: "jadbery.com", href: "https://jadbery.com" },
            { text: "Support", href: "mailto:support@jadbery.com" }
        ]
    }
};
