import { Space, Text, Title } from '@mantine/core';
import AboutUsImage from '../../assets/images/aboutus.jpg';

const AboutUs = () => {
	return (
		<div className='text-center' id='about_us'>
			<Title
				className='!text-[35px] md:!text-[55px]'
				ff={'Fraunces, serif'}
				fw={800}
				lh={1.2}
				color='dark'
			>
				About Us
			</Title>
			<Text size={'md'} color='dark' fw={500}>
				Who we are
			</Text>

			<Space h={40} />

			<div className='grid lg:grid-cols-2 gap-5'>
				<img src={AboutUsImage} alt='image' className='w-[100%] rounded-lg' />
				<div>
					<Text ff={'Fraunces, serif'} fw={600} className='text-left'>
						We are a taxi/livery/non-emergency medical transport business in the
						Hudson, NY area. We take pleasure in getting you from point A to
						point B safely and courteously. We officially started on 8th August
						2019.
					</Text>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
