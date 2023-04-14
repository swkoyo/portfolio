import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel';
import {
	ActionIcon,
	Box,
	CloseButton,
	Flex,
	Grid,
	Group,
	Stack,
	Text,
	useMantineTheme
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Autoplay from 'embla-carousel-autoplay';
import { isEmpty, pickBy, startCase } from 'lodash';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Icon from '../../components/Icon';
import Title from '../../components/Title';
import { NAV } from '../../constants';
import { Project } from '../../types';
import { TECH_CATEGORIES } from './data';

export default function FeaturedProject({
	project: { title, images, description, tech, links },
	handleProjectClose,
	TRANSITION_DURATION
}: {
	project: Project;
	handleProjectClose: () => void;
	TRANSITION_DURATION: number;
}) {
	const tech_used = pickBy(
		tech,
		(value, key) => TECH_CATEGORIES.includes(key) && !isEmpty(value)
	);

	const [embla, setEmbla] = useState<Embla | null>(null);

	const autoplay = useRef(Autoplay({ delay: 2000 }));

	useAnimationOffsetEffect(embla, TRANSITION_DURATION);

	const theme = useMantineTheme();

	const greaterThanXs = useMediaQuery(`(min-width: ${theme.breakpoints.xs})`);

	return (
		<Stack p='sm' spacing='md'>
			<Flex>
				<Group>
					<Icon
						type={NAV.PROJECTS}
						color={theme.colors.teal[4]}
						size={greaterThanXs ? '2rem' : '1rem'}
					/>
					<Title
						hideUnderline
						value={title}
						size={greaterThanXs ? '3xl' : 'xl'}
					/>
				</Group>
				<Box sx={{ flexGrow: 1 }} />
				<Group>
					{links.map(({ type, url }) => (
						<ActionIcon
							key={type}
							component='a'
							size={greaterThanXs ? 'md' : 'xs'}
							color={
								theme.colorScheme === 'dark'
									? undefined
									: 'dark'
							}
							href={url}
							target='_blank'
						>
							<Icon type={type} size='1.5rem' />
						</ActionIcon>
					))}
					<CloseButton
						size={greaterThanXs ? 'md' : 'sm'}
						onClick={() => handleProjectClose()}
					/>
				</Group>
			</Flex>
			<Text size={greaterThanXs ? 'lg' : 'md'}>{description}</Text>
			<Carousel
				py='lg'
				mx='auto'
				w='100%'
				h='100%'
				withIndicators
				loop
				getEmblaApi={setEmbla}
				plugins={[autoplay.current]}
				onMouseEnter={autoplay.current.stop}
				onMouseLeave={autoplay.current.reset}
			>
				{images.map((img) => (
					<Carousel.Slide key={img} mah={400} mih={400}>
						<Image fill src={img} alt={title} />
					</Carousel.Slide>
				))}
			</Carousel>
			<Title value='Tech Stack' size='2xl' />
			<Grid pt='md'>
				{Object.entries(tech_used).map(([key, value]) => (
					<Grid.Col span={6} key={key}>
						<Stack spacing='xs'>
							<Text size='lg'>{startCase(key)}</Text>
							<Flex gap={14} wrap='wrap'>
								{value.map((tech) => (
									<Group key={tech} spacing='xs' noWrap>
										<Icon size='1rem' type={tech} />
										<Text size='sm'>{tech}</Text>
									</Group>
								))}
							</Flex>
						</Stack>
					</Grid.Col>
				))}
			</Grid>
		</Stack>
	);
}
