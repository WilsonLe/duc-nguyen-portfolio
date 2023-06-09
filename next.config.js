const path = require("path");
const { withPayload } = require("@payloadcms/next-payload");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (config) => {
		config.resolve.fallback = { fs: false, path: false };
		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "s3.amazonaws.com"
			}
		]
	}
};

const payloadConfig = {
	// The second argument to `withPayload`
	// allows you to specify paths to your Payload dependencies.

	// Point to your Payload config (Required)
	configPath: path.resolve(__dirname, "./src/payload/payload.config.ts"),

	// Point to your exported, initialized Payload instance (optional, default shown below`)
	payloadPath: path.resolve(process.cwd(), "./src/payload/payloadClient.ts")
};

module.exports = withPayload(nextConfig, payloadConfig);
