import About from '../features/About';
import Experience from '../features/Experience';
import FeaturedProjects from '../features/Projects/FeaturedProjects';
import MainContainer from '../layouts/MainContainer';

export default function Home() {
	return (
		<MainContainer>
			<About />
			<Experience />
			<FeaturedProjects />
		</MainContainer>
	);
}
