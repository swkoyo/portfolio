import { Avatar, Grid, Group, Stack, Text, rem } from '@mantine/core';
import Icon from '../../components/Icon';
import { BIO, CORE_TECH } from './data';

export default function About() {
	return (
		<Stack sx={{ rowGap: 30 }}>
			<Text size='2xl' weight='bold'>
				About me
			</Text>
			<Grid gutter={50} align='center'>
				<Grid.Col span={4}>
					<Avatar
						src='./avatar.png'
						size='full'
						radius={500}
						sx={(theme) => ({
							border: `${rem(3)} solid ${theme.colors.dark[4]}`,
							backgroundColor: 'white'
						})}
					/>
				</Grid.Col>
				<Grid.Col span={8}>
					<Stack>
						{BIO.map((paragraph, i) => (
							<Text size='lg' key={i}>
								{paragraph}
							</Text>
						))}
						<Text size='lg'>My core tech stack is:</Text>
						<Grid pt='sm'>
							{CORE_TECH.map((tech) => (
								<Grid.Col key={tech} span={4}>
									<Group>
										<Icon type={tech} size='1.2rem' />
										<Text size='sm'>{tech}</Text>
									</Group>
								</Grid.Col>
							))}
						</Grid>
					</Stack>
				</Grid.Col>
			</Grid>
		</Stack>
	);
}
