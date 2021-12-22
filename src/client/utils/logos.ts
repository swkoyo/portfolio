export const getLogo = (type: string): string => {
	switch (type) {
		case 'github':
			return 'https://www.vectorlogo.zone/logos/github/github-tile.svg';
		case 'linkedin':
			return 'https://www.vectorlogo.zone/logos/linkedin/linkedin-tile.svg';
		case 'website':
			return 'https://img.icons8.com/ios-filled/50/000000/domain.png';
		case 'resume':
			return 'https://www.pngrepo.com/png/192668/180/curriculum-resume.png';
	}
};
