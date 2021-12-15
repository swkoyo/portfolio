export default () => ({
	port: parseInt(process.env.PORT) || 3000,
	jwt: {
		secret: process.env.JWT_SECRET || 'shh',
		expires_in: process.env.JWT_EXPIRES_IN || '24h'
	}
});
