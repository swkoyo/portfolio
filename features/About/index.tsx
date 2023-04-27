import { Avatar, Grid, Group, Stack, Text, rem } from '@mantine/core';
import Image from 'next/image';
import Icon from '../../components/Icon';
import Title from '../../components/Title';
import { HomeProps } from '../../pages';

export default function About({
	bio,
	core_tech
}: Pick<HomeProps, 'bio' | 'core_tech'>) {
	return (
		<Stack sx={{ rowGap: 30 }}>
			<Title value='About me' />
			<Grid gutter={50} align='center'>
				<Grid.Col xs={12} sm={4}>
					<Avatar
						size='full'
						h='13rem'
						w='13rem'
						mx='auto'
						radius={500}
						sx={(theme) => ({
							border: `${rem(3)} solid ${
								theme.colorScheme === 'dark'
									? theme.colors.dark[4]
									: theme.colors.gray[5]
							}`,
							backgroundColor:
								theme.colorScheme === 'dark'
									? theme.colors.dark[4]
									: theme.colors.gray[5]
						})}
					>
						<Image src='/avatar.png' alt='avatar' fill priority />
					</Avatar>
				</Grid.Col>
				<Grid.Col xs={12} sm={8}>
					<Stack>
						{bio.map((paragraph, i) => (
							<Text size='lg' key={i}>
								{paragraph}
							</Text>
						))}
						<Text size='lg'>My core tech stack is:</Text>
						<Grid pt='sm'>
							{core_tech.map((tech) => (
								<Grid.Col key={tech} span={6} xs={4}>
									<Group noWrap>
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
