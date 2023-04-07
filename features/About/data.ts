import {
	APP,
	EMAIL_ADDRESS,
	GITHUB_LINK,
	LINKEDIN_LINK,
	TECH
} from '../../constants';

export const BIO = `Experienced software developer offering
expertise in full software development
lifecycle, web application architecture, and
project management. Proven track-record of
designing and executing strategic development
initiatives aligned to organizational objectives
with a focus on end user satisfaction and
engagement. Deep technical expertise combined
with an understanding of the importance of
client engagement and satisfaction.
Collaborative team leader continually focused on
building relationships to produce highly
effective teams, increasing productivity, and
improving outcomes. Individual dedicated to
self-reflection and personal improvement who
consistently exceeds performance metrics.
`;

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
