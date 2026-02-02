import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/generator'],
            disallow: '/private/',
        },
        sitemap: 'https://invoice.shihabsaleem.site/sitemap.xml',
    };
}
