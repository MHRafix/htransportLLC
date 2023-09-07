import { Box, Container, Space } from '@mantine/core';
import './App.css';
import AboutUs from './components/landing-page/AboutUs';
import ContactUs from './components/landing-page/ContactUs';
import HeroSection from './components/landing-page/HeroSection';
import AppFooter from './components/layouts/dashboard/AppFooter';
import AppHeader from './components/layouts/dashboard/AppHeader';
function App() {
	return (
		<Box bg={'#eee'}>
			<div className='hero_section_main ' id='home'>
				<AppHeader />

				<HeroSection />
			</div>
			<Space h={70} />
			<Container size='lg' py='sm'>
				<AboutUs />
				<Space h={70} />
				<ContactUs />
			</Container>
			<Space h={70} />

			<AppFooter />
		</Box>
	);
}

export default App;
// hero-bg.jpg
