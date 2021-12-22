export const getLogo = (type: string): string => {
	switch (type) {
		case 'github':
			return 'https://www.vectorlogo.zone/logos/github/github-tile.svg';
		case 'linkedin':
			return 'https://www.vectorlogo.zone/logos/linkedin/linkedin-tile.svg';
		case 'website':
			return 'https://cdn2.iconfinder.com/data/icons/business-804/24/global-seo-website-globe-worldwide-256.png';
	}
};
