import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://invoice.shihabsaleem.site';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/generator`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        // Add other routes as needed
    ];
}
