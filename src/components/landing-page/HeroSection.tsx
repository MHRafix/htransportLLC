import { Button, Container, Text } from '@mantine/core';

const HeroSection = () => {
	return (
		<Container size={'lg'} className=' mt-[100px]'>
			<Text
				color='red'
				ff={'Fraunces, serif'}
				className='!text-[35px] md:!text-[55px]'
				fw={800}
				lh={1.2}
			>
				Need A Ride ?
			</Text>
			<Text
				color='yellow'
				ff={'Fraunces, serif'}
				fw={800}
				my={0}
				lh={1.2}
				className='!text-[35px] md:!text-[55px]'
			>
				CHOOSE YOUR
			</Text>
			<Text
				color='yellow'
				ff={'Fraunces, serif'}
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
				ff={'Fraunces, serif'}
				size={18}
				fw={600}
				color='white'
			>
				Best car service in HUDSON NY
			</Text>
			<Button ml={5} ff={'Fraunces, serif'} color='yellow' size='lg' px={40}>
				Contact us
			</Button>
		</Container>
	);
};

export default HeroSection;
