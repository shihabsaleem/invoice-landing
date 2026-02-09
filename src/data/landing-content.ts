export const landingPageData = {
    navbar: {
        logo: "/assets/icon.svg",
        brandName: "Invoice by jadbery",
        links: [
            { text: "Features", href: "#features" },
            { text: "How it Works", href: "#how-it-works" },
            { text: "Testimonials", href: "#testimonials" },
            { text: "FAQ", href: "#faq" }
        ],
        ctaText: "Create Invoice Now",
        ctaLink: "/generator",
        chromeCtaText: "Chrome Extension",
        chromeCtaLink: "https://chromewebstore.google.com/detail/invoice-by-jadbery/fcdjehhdacfdkflfjapeoagfddedjgaj"
    },
    hero: {
        badgeText: "100% Free & Offline-First",
        title: "Professional Invoices <br /> <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-500'>Made Simple.</span>",
        description: "Create beautiful, branded PDF invoices and estimates directly from your browser. No sign-up required. Secure & Offline-first.",
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
        previewDomain: "invoice.shihabsaleem.site"
    },
    features: {
        sectionTitle: "All the features you need",
        mainTitle: "Everything to get paid faster.",
        description: "Powerful features packed into a lightweight Web App and Chrome Extension. No bloat, just business.",
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
                description: "Need a Quote or Receipt Maker? Switch document types instantly. We support Invoices, Receipts, Estimates, and more."
            },
            {
                iconColorClass: "bg-green-100 text-green-600",
                iconName: "Shield",
                title: "Privacy First",
                description: "No servers. No tracking. All your client data and invoice history is stored securely on your own device."
            },
            {
                iconColorClass: "bg-orange-100 text-orange-600",
                iconName: "Zap",
                title: "Lightning Fast",
                description: "Built for speed. Generate PDFs instantly without page reloads or waiting times."
            },
            {
                iconColorClass: "bg-red-100 text-red-600",
                iconName: "Globe",
                title: "Works Offline",
                description: "No internet? No problem. Our Progressive Web App (PWA) works seamlessly even when you're offline."
            },
            {
                iconColorClass: "bg-teal-100 text-teal-600",
                iconName: "Download",
                title: "One-Click PDF",
                description: "Download professional PDFs with a single click. Ready to email or print immediately."
            }
        ]
    },
    howItWorks: {
        sectionTitle: "Simple Workflow",
        mainTitle: "Create an invoice in 3 steps",
        steps: [
            {
                title: "Fill Details",
                description: "Enter your business info, client details, and line items.",
                icon: "PenTool"
            },
            {
                title: "Customize",
                description: "Add your logo, pick brand colors, and choose a template.",
                icon: "Settings"
            },
            {
                title: "Download",
                description: "Get your professional PDF invoice instantly.",
                icon: "Download"
            }
        ]
    },
    testimonials: {
        sectionTitle: "Testimonials",
        mainTitle: "Loved by freelancers.",
        description: "Join thousands of professionals who trust us with their billing.",
        items: [
            {
                name: "Adil Rafeeque.",
                role: "Digital Marketer",
                quote: "\"The best part is I don't need to login to some slow accounting software. I just use the tool, fill it out, and boom—PDF ready in seconds.\"",
                authorLink: "https://adilrafeeque.com/"
            },
            {
                name: "Akshay Das.",
                role: "SDE @TCS",
                quote: "\"If you are a freelancer or a small business owner who dreads the admin hour, Invoice by jadbery is a breath of fresh air.\"",
                authorLink: "https://akshaydas.online/"
            },
            {
                name: "Anupam Singh.",
                role: "Co-Founder @Digia",
                quote: "\"This feels refreshingly simple and honest, no signup, no tracking, just a clean way for freelancers to make good-looking invoices and stay in control of their data.\"",
                authorLink: "#"
            }
        ],
        ctaCard: {
            title: "You're next!",
            description: "Start creating professional invoices today.",
            buttonText: "Create Invoice",
            buttonLink: "/generator"
        }
    },
    faq: {
        sectionTitle: "FAQ",
        mainTitle: "Frequently Asked Questions",
        items: [
            {
                question: "Is this really free?",
                answer: "Yes, 100% free. There are no hidden fees, no subscriptions, and no limits on the number of invoices you can create."
            },
            {
                question: "Is my data safe?",
                answer: "Absolutely. We use local storage technology, meaning your data never leaves your device. We don't have servers to store your invoices."
            },
            {
                question: "Can I add my logo?",
                answer: "Yes! You can upload your company logo and it will appear on all your invoices. You can also customize the primary color to match your brand."
            },
            {
                question: "Do I need to sign up?",
                answer: "No. You can start creating invoices immediately without creating an account."
            }
        ]
    },
    cta: {
        title: "Ready to get paid faster?",
        description: "Join thousands of freelancers and small businesses managing their invoicing for free.",
        buttonText: "Create Invoice Now",
        secondaryButtonText: "Get Chrome Extension",
        secondaryButtonLink: "https://chromewebstore.google.com/detail/invoice-by-jadbery/fcdjehhdacfdkflfjapeoagfddedjgaj"
    },
    footer: {
        title: "Simple. Secure. Free.",
        logo: "/assets/logo.svg",
        ctaText: "Create Invoice Now",
        ctaLink: "/generator",
        chromeCtaText: "Chrome Extension",
        chromeCtaLink: "https://chromewebstore.google.com/detail/invoice-by-jadbery/fcdjehhdacfdkflfjapeoagfddedjgaj",
        copyright: "© 2026 Invoice by jadbery. All rights reserved.",
        links: [
            { text: "Privacy Policy", href: "/privacy" },
            { text: "Terms of Service", href: "/terms" },
            { text: "Support", href: "mailto:support@jadbery.com" },
            { text: "Dev", href: "https://shihabsaleem.site" },
            { text: "jadbery", href: "https://jadbery.com" },
        ]
    },
    privacyPolicy: {
        effectiveDate: "January 29, 2026",
        contactEmail: "support@jadbery.com",
        sections: [
            {
                title: "1. Information We Collect",
                content: "We operate on a \"Privacy First\" principle. <strong>We do not collect any personal data from you.</strong> All data you enter into the Invoice Generator (including company details, client information, and invoice items) is stored locally on your device using your browser's Local Storage."
            },
            {
                title: "2. How We Use Information",
                content: "Since we do not collect your information, we do not use, share, or sell it. The data remains strictly on your device for your convenience (e.g., to reload your previous invoice)."
            },
            {
                title: "3. Data Security",
                content: "Your data security is managed by your browser's security protocols. We generally recommend that you do not use public computers to generate sensitive financial documents, as local storage may persist on shared devices."
            },
            {
                title: "4. Third-Party Services",
                content: "We use <strong>Google Analytics 4</strong> and <strong>Microsoft Clarity</strong> on our <strong>Website</strong> to understand anonymous traffic, usage patterns, and user interactions (via heatmaps and session replays). This helps us improve the user experience. You can opt-out of cookie tracking via the banner on our site. <br /><br /><strong>Note for Chrome Extension Users:</strong> The Invoice by Jadbery Chrome Extension does <strong>NOT</strong> use Microsoft Clarity or any session recording tools. It operates with strict privacy, storing data locally."
            },
            {
                title: "5. Contact Us",
                content: "If you have any questions about this Privacy Policy, please contact us at support@jadbery.com."
            }
        ]
    },
    termsOfService: {
        effectiveDate: "January 29, 2026",
        sections: [
            {
                title: "1. Acceptance of Terms",
                content: "By accessing or using the Invoice by Jadbery website and generator, you agree to be bound by these Terms of Service."
            },
            {
                title: "2. Content Ownership",
                content: "<strong>You own the content you generate.</strong> The invoices/documents created using this tool are your property. We lay no claim to the data or the final documents produced."
            },
            {
                title: "3. Use License",
                content: "Permission is granted to use the Invoice by Jadbery software for personal or commercial document generation."
            },
            {
                title: "4. Disclaimer",
                content: "The materials on Invoice by Jadbery's website are provided on an 'as is' basis. We make no warranties, expressed or implied, regarding the reliability or availability of the service."
            },
            {
                title: "5. Limitations",
                content: "In no event shall Invoice by Jadbery be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on our website."
            },
            {
                title: "6. Governing Law",
                content: "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction of our incorporation."
            }
        ]
    }
};
