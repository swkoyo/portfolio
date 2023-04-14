import About from '../features/About';
import Experience from '../features/Experience';
import MainContainer from '../layouts/MainContainer';

export default function Home() {
	return (
		<MainContainer>
			<About />
			<Experience />
		</MainContainer>
	);
}
