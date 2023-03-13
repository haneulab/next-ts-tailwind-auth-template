/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    images: {
        /** Google Sign In User Profile Image Domain */
        domains: ['lh3.googleusercontent.com'],
    },
}

module.exports = nextConfig
