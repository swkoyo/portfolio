import { Avatar, Grid, Group, Text, rem } from '@mantine/core';
import Icon from '../../components/Icon';
import { BIO, CORE_TECH, INFO } from './data';

export default function About() {
	return (
		<Grid>
			<Grid.Col span={6}>
				<Avatar
					src='./avatar.png'
					size={300}
					radius={500}
					sx={(theme) => ({
						border: `${rem(3)} solid ${theme.colors.dark[4]}`,
						backgroundColor: 'white'
					})}
				/>
			</Grid.Col>
			<Grid.Col span={6}>
				<Text>Hello, I&apos;m Brandon.</Text>
				<Text>I&apos;m a full stack web developer.</Text>
				{INFO.map(({ type, value }) => (
					<Group key={type}>
						<Icon type={type} size='1.5rem' />
						<Text>{value}</Text>
					</Group>
				))}
			</Grid.Col>
			<Grid.Col span={12}>
				{CORE_TECH.map((tech) => (
					<Group key={tech}>
						<Icon type={tech} size='1.5rem' />
						<Text>{tech}</Text>
					</Group>
				))}
			</Grid.Col>
			<Grid.Col span={12}>
				<Text>{BIO}</Text>
			</Grid.Col>
		</Grid>
	);
}
