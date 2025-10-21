/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'nmr.oxinst.com',
            },
            {
            protocol: 'https',
            hostname: 'vietanh.vn',
            },
        ],
    },
};

export default nextConfig;
