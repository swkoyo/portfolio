import {
	APP,
	EMAIL_ADDRESS,
	GITHUB_LINK,
	LINKEDIN_LINK,
	TECH
} from '../../constants';

export const BIO = [
	`
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit amet.
		Ut placerat orci nulla pellentesque dignissim enim sit.
	`,
	`
		Cras adipiscing enim eu turpis. Vitae justo eget magna fermentum iaculis eu non diam phasellus.
		Congue eu consequat ac felis donec et odio.
	`,
	`
		Vulputate eu scelerisque felis imperdiet
	`
];

export const CORE_TECH = [
	TECH.NODE,
	TECH.TS,
	TECH.REACT,
	TECH.PSQL,
	TECH.NEST,
	TECH.GIT,
	TECH.JS,
	TECH.REDIS,
	TECH.REDUX
];

export const INFO = [
	{
		type: APP.EMAIL,
		value: EMAIL_ADDRESS,
		link: `mailto:${EMAIL_ADDRESS}`
	},
	{
		type: APP.GITHUB,
		value: GITHUB_LINK.split('.com/')[1],
		link: GITHUB_LINK
	},
	{
		type: APP.LINKEDIN,
		value: LINKEDIN_LINK.split('/in/')[1],
		link: LINKEDIN_LINK
	}
];
