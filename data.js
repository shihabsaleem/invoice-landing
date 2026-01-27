const landingPageData = {
    navbar: {
        logo: "assets/icon-48.png",
        brandName: "Invoice by jadbery",
        links: [
            { text: "Features", href: "#features" },
            { text: "How it Works", href: "#how-it-works" },
            { text: "Testimonials", href: "#testimonials" }
        ],
        ctaText: "Add to Chrome",
        ctaLink: "https://chrome.google.com/webstore"
    },
    hero: {
        badgeText: "100% Free & Offline-First",
        title: "Professional Invoices <br> <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-500'>Made Simple.</span>",
        description: "Create beautiful, branded invoices, estimates, and quotes directly from your browser. No sign-up required. data stays on your device.",
        primaryCta: {
            text: "Add to Chrome",
            link: "https://chrome.google.com/webstore",
            iconPath: "M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm0 10.909l-3.273 5.455H2.182l5.455-9.273L12 10.909zM12 2.182c1.864 0 3.593.475 5.114 1.295l-3.477 6.023h-8.73c1.67-4.321 5.093-7.318 7.093-7.318zm7.318 6.545h-6.545l3.273 5.727 3.272-5.727c0 0 .091.682.091 1.636 0 5.034-3.818 9.148-8.727 9.773l5.034-8.727c1.782-1.375 2.927-3.045 2.927-4.886 0-1.841-1.145-3.511-2.927-4.886z"
        },
        secondaryCta: {
            text: "View Demo",
            link: "#demo"
        }
    },
    features: {
        sectionTitle: "All the features you need",
        mainTitle: "Everything to get paid faster.",
        description: "Powerful features packed into a lightweight browser extension. No bloat, just business.",
        items: [
            {
                iconColorClass: "bg-blue-100 text-blue-600",
                iconPath: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
                title: "Custom Branding",
                description: "Upload your logo and pick your brand colors. Make every invoice look like it came from a Fortune 500 company."
            },
            {
                iconColorClass: "bg-purple-100 text-purple-600",
                iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                title: "Multi-Format Support",
                description: "Need a Quote? Or an Estimate? Switch document types instantly. We support Invoices, Receipts, and more."
            },
            {
                iconColorClass: "bg-green-100 text-green-600",
                iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
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
        ]
    },
    footer: {
        title: "Ready to look professional?",
        ctaText: "Install for Free",
        ctaLink: "https://chrome.google.com/webstore",
        copyright: "&copy; 2026 Invoice by jadbery. All rights reserved.",
        links: [
            { text: "Privacy Policy", href: "#" },
            { text: "Terms of Service", href: "#" },
            { text: "Support", href: "#" }
        ]
    }
};
