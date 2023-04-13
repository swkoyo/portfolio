import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel';
import {
	ActionIcon,
	Box,
	CloseButton,
	Flex,
	Grid,
	Group,
	Image,
	Stack,
	Text
} from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { isEmpty, pickBy, startCase } from 'lodash';
import { useRef, useState } from 'react';
import Icon from '../../components/Icon';
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

	return (
		<Stack p='sm'>
			<Flex>
				<Group>
					<Icon size='2rem' />
					<Text size='2xl' weight='bold'>
						{title}
					</Text>
				</Group>
				<Box sx={{ flexGrow: 1 }} />
				<Group>
					{links.map(({ type, url }) => (
						<ActionIcon
							key={type}
							component='a'
							href={url}
							target='_blank'
						>
							<Icon type={type} size='1.5rem' />
						</ActionIcon>
					))}
					<CloseButton
						size='lg'
						onClick={() => handleProjectClose()}
					/>
				</Group>
			</Flex>
			<Text size='lg'>{description}</Text>
			<Carousel
				mx='auto'
				withIndicators
				loop
				getEmblaApi={setEmbla}
				plugins={[autoplay.current]}
				onMouseEnter={autoplay.current.stop}
				onMouseLeave={autoplay.current.reset}
			>
				{images.map((img) => (
					<Carousel.Slide key={img}>
						<Image src={img} alt={title} />
					</Carousel.Slide>
				))}
			</Carousel>
			<Text size='xl' weight='bold'>
				Tech Stack
			</Text>
			<Grid>
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
