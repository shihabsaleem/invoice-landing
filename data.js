const landingPageData = {
    navbar: {
        logo: "assets/icon.svg",
        brandName: "Invoice by jadbery",
        links: [
            { text: "Features", href: "index.html#features" },
            { text: "How it Works", href: "index.html#how-it-works" },
            { text: "Testimonials", href: "index.html#testimonials" }
        ],
        ctaText: "Create Invoice Now",
        ctaLink: "/generator"
    },
    hero: {
        badgeText: "100% Free & Offline-First",
        title: "Professional Invoices <br> <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-500'>Made Simple.</span>",
        description: "Create beautiful, branded invoices, estimates, and quotes directly from your browser. No sign-up required. data stays on your device.",
        primaryCta: {
            text: "Create Invoice Now",
            link: "/generator",
            iconPath: "M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm0 10.909l-3.273 5.455H2.182l5.455-9.273L12 10.909zM12 2.182c1.864 0 3.593.475 5.114 1.295l-3.477 6.023h-8.73c1.67-4.321 5.093-7.318 7.093-7.318zm7.318 6.545h-6.545l3.273 5.727 3.272-5.727c0 0 .091.682.091 1.636 0 5.034-3.818 9.148-8.727 9.773l5.034-8.727c1.782-1.375 2.927-3.045 2.927-4.886 0-1.841-1.145-3.511-2.927-4.886z"
        },
        secondaryCta: {
            text: "Chrome Extension",
            link: "https://chromewebstore.google.com/detail/invoice-by-jadbery/fcdjehhdacfdkflfjapeoagfddedjgaj"
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
        ctaText: "Create Invoice Now",
        ctaLink: "https://chromewebstore.google.com/detail/invoice-by-jadbery/fcdjehhdacfdkflfjapeoagfddedjgaj",
        copyright: "&copy; 2026 Invoice by jadbery. All rights reserved.",
        links: [
            { text: "Privacy Policy", href: "privacy.html" },
            { text: "Terms of Service", href: "terms.html" },
            { text: "Main Site", href: "https://jadbery.com" },
            { text: "Support", href: "mailto:support@jadbery.com" }
        ]
    },
    privacyPage: {
        title: "Privacy Policy",
        lastUpdated: "January 27, 2026",
        overview: {
            title: "1. Overview",
            content: "<strong>Invoice by jadbery</strong> is a 100% free, offline-first invoice generator designed for speed and professionalism. No sign-up required, no hidden fees, and your data stays on your device.<br><br>We value your privacy. This extension operates offline-first. We do not transmit or store your sensitive financial data on our servers."
        },
        sections: [
            {
                title: "2. Data Collection",
                content: "Because our application runs entirely client-side (in your browser), we technically cannot see or collect the following: <ul class='list-disc pl-5 space-y-2 text-slate-600 mt-2 mb-2'><li>Your client lists or details.</li><li>Invoice amounts, dates, or items.</li><li>Your personal or business contact information.</li><li>Payment details or banking information.</li></ul>"
            },
            {
                title: "3. Data Storage",
                content: "All your client data, company details, and invoice history are stored securely in your browser's <code>localStorage</code> or <code>indexedDB</code>.<br><br>If you uninstall the extension or clear your browser data, this local information may be deleted. We recommend downloading PDFs of your invoices for permanent records."
            },
            {
                title: "4. Third-Party Services",
                content: "We use minimal third-party services to ensure the extension functions correctly: <ul class='list-disc pl-5 space-y-2 text-slate-600 mt-2 mb-2'><li><strong>Google Fonts</strong>: Used to load typography.</li><li><strong>Chrome Web Store</strong>: Handles the distribution and updates of the extension.</li></ul>"
            },
            {
                title: "5. Changes to This Policy",
                content: "We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page."
            },
            {
                title: "6. Contact Us",
                content: "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us."
            }
        ]
    },
    termsPage: {
        title: "Terms of Service",
        lastUpdated: "January 27, 2026",
        sections: [
            {
                title: "1. Acceptance of Terms",
                content: "By accessing and using <strong>Invoice by jadbery</strong> (the \"Extension\"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use the Extension."
            },
            {
                title: "2. Use License",
                content: "Permission is granted to install and use the Extension for personal or commercial invoice generation. This is a free license, not a transfer of title.<br><br>Under this license, you may not: <ul class='list-disc pl-5 space-y-2 text-slate-600 mt-2 mb-2'><li>Reverse engineer or attempt to extract the source code of the Extension, except as permitted by applicable law.</li><li>Use the Extension for any illegal or unauthorized purpose.</li><li>Violate any laws in your jurisdiction while using the Extension.</li></ul>"
            },
            {
                title: "3. Disclaimer",
                content: "The Extension is provided on an \"AS IS\" and \"AS AVAILABLE\" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
            },
            {
                title: "4. Limitations",
                content: "In no event shall <strong>Invoice by jadbery</strong> or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the Extension, even if we have been notified orally or in writing of the possibility of such damage."
            },
            {
                title: "5. Governing Law",
                content: "These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
            },
            {
                title: "6. Changes to Terms",
                content: "We reserve the right to modify these terms at any time. We will provide notice of significant changes by updating the date at the top of this page. Your continued use of the Extension after any such change constitutes your acceptance of the new Terms of Service."
            },
            {
                title: "7. Contact",
                content: "If you have any questions about these Terms, please contact us at <a href='mailto:support@jadbery.com' class='text-brand-600 hover:text-brand-500'>support@jadbery.com</a>."
            }
        ]
    }
};
