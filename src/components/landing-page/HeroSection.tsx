import { Button, Container, Text } from '@mantine/core';

const HeroSection = () => {
	return (
		<Container size={'lg'} className=' mt-[100px]'>
			<Text
				color='white'
				ff={'Fraunces, serif'}
				className='!text-[35px] md:!text-[55px]'
				fw={800}
				lh={1.2}
			>
				Need A Ride ?
			</Text>

			<Text
				ml={5}
				mb={10}
				ff={'Fraunces, serif'}
				size={18}
				fw={600}
				color='white'
			>
				Best car service in HUDSON NY
			</Text>
			<Button
				ml={5}
				ff={'Fraunces, serif'}
				color='dark'
				size='lg'
				px={40}
				onClick={() => (location.hash = 'contact_us')}
			>
				Contact us
			</Button>
		</Container>
	);
};

export default HeroSection;
