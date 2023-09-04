import { Space, Text, Title } from '@mantine/core';
import {
	IconCar,
	IconDiscountCheckFilled,
	IconHomeShield,
	IconMoodHeart,
} from '@tabler/icons-react';
import CountUp from 'react-countup';

const SuccessHistory = () => {
	return (
		<div className='text-center' id='success_history'>
			<Title
				className='!text-[35px] md:!text-[55px]'
				ff={'Nunito, sans-serif'}
				fw={800}
				lh={1.2}
				color='yellow'
			>
				Why Choose Us
			</Title>
			<Text size={'md'} color='red' fw={500}>
				Best offers Information
			</Text>

			<Space h={40} />

			<div className='grid lg:grid-cols-4 sm:grid-cols-2  lg:gap-5 gap-8'>
				<div className='text-center'>
					<IconMoodHeart size={50} color='#FAB005' className='!mx-auto' />

					<Space h={10} />
					<Title ff={'Nunito, sans-serif'} fw={800}>
						<CountUp
							start={2500}
							end={4000}
							suffix='+'
							duration={3}
							enableScrollSpy
						/>
					</Title>

					<Title order={5} fw={600} ff={'Nunito, sans-serif'}>
						Happy customers
					</Title>
				</div>
				<div className='text-center'>
					<IconHomeShield size={50} color='#FAB005' className='!mx-auto' />

					<Space h={10} />
					<Title ff={'Nunito, sans-serif'} fw={800}>
						<CountUp
							start={20}
							end={100}
							suffix='%'
							duration={3}
							enableScrollSpy
						/>
					</Title>

					<Title order={5} fw={600} ff={'Nunito, sans-serif'}>
						Safe and Secure
					</Title>
				</div>
				<div className='text-center'>
					<IconCar size={50} color='#FAB005' className='!mx-auto' />

					<Space h={10} />
					<Title ff={'Nunito, sans-serif'} fw={800}>
						<CountUp
							start={1}
							end={15}
							suffix='+'
							duration={3}
							enableScrollSpy
						/>
					</Title>

					<Title order={5} fw={600} ff={'Nunito, sans-serif'}>
						Cars
					</Title>
				</div>

				<div className='text-center'>
					<IconDiscountCheckFilled
						size={50}
						color='#FAB005'
						style={{
							color: '#FAB005',
						}}
						className='!mx-auto'
					/>

					<Space h={10} />
					<Title ff={'Nunito, sans-serif'} fw={800}>
						<CountUp
							start={20}
							end={100}
							suffix='%'
							duration={3}
							enableScrollSpy
						/>
					</Title>

					<Title order={5} fw={600} ff={'Nunito, sans-serif'}>
						Certified Service
					</Title>
				</div>
			</div>
		</div>
	);
};

export default SuccessHistory;
