export default () => ({
	port: parseInt(process.env.PORT) || 3000,
	node_env: process.env.NODE_ENV || 'development',
	jwt: {
		secret: process.env.JWT_SECRET || 'shh',
		expires_in: process.env.JWT_EXPIRES_IN || '24h'
	}
});
