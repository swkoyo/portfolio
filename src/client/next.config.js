module.exports = {
	distDir: '../../.next',
	env: {
		API_URL: process.env.API_URL,
		FULL_NAME: `${process.env.ADMIN_FIRST_NAME} ${process.env.ADMIN_LAST_NAME}`
	}
};
