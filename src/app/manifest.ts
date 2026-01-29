import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Invoice by Jadbery',
        short_name: 'Invoice App',
        description: 'Professional Invoice Generator for Freelancers and Small Businesses',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/assets/icon.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/assets/icon.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
