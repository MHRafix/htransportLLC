import { Container, Space } from '@mantine/core';
import './App.css';
import AboutUs from './components/landing-page/AboutUs';
import HeroSection from './components/landing-page/HeroSection';
import AppHeader from './components/layouts/dashboard/AppHeader';

function App() {
	return (
		<>
			<div className='hero_section_main'>
				<AppHeader />

				<HeroSection />
			</div>
			<Space h={50} />
			<Container size='lg' py='sm'>
				<AboutUs />
			</Container>
		</>
	);
}

export default App;
// hero-bg.jpg
