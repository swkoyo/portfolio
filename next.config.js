/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['camo.githubusercontent.com', 'www.zdnet.com']
	}
};

module.exports = nextConfig;
