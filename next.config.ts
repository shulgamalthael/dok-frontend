import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flagcdn.com',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'img.dok.ua',
                pathname: '/**'
            }
        ],
    },
};

export default withNextIntl(nextConfig);
