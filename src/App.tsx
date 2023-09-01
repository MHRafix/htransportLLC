import { Button, Text } from '@mantine/core';
import './App.css';
import AppHeader from './components/layouts/dashboard/AppHeader';

function App() {
	return (
		<div className='hero_section_main'>
			<AppHeader />
			<div className='md:mt-[100px] p-2'>
				<Text
					color='red'
					ff={'Nunito, sans-serif'}
					className='!text-[35px] md:!text-[55px]'
					fw={800}
					lh={1.2}
				>
					Need A Ride ?
				</Text>
				<Text
					color='yellow'
					ff={'Nunito, sans-serif'}
					fw={800}
					my={0}
					lh={1.2}
					className='!text-[35px] md:!text-[55px]'
				>
					CHOOSE YOUR
				</Text>
				<Text
					color='yellow'
					ff={'Nunito, sans-serif'}
					className='!text-[35px] md:!text-[55px]'
					fw={800}
					my={0}
					lh={1.2}
				>
					COMFORTABLE TAXI
				</Text>
				<Text
					ml={5}
					mb={10}
					ff={'Nunito, sans-serif'}
					size={18}
					fw={600}
					color='white'
				>
					Best car service in HUDSON NY
				</Text>
				<Button
					ml={5}
					ff={'Nunito, sans-serif'}
					color='yellow'
					size='lg'
					px={40}
				>
					Contact us
				</Button>
			</div>
		</div>
	);
}

export default App;
// hero-bg.jpg
