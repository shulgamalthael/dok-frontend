import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

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
    env: {
        TRUST_PROXY: 'true',
    },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
