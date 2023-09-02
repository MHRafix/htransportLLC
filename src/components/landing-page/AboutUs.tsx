import { Space, Text, Title } from '@mantine/core';
import AboutUsImage from '../../assets/images/aboutus.jpg';

const AboutUs = () => {
	return (
		<div className='text-center'>
			<Title fz={55} ff={'Nunito, sans-serif'} fw={800} lh={1.2} color='yellow'>
				Why Choose Us
			</Title>
			<Text size={'md'} color='red' fw={500}>
				Best offers Information
			</Text>

			<Space h={40} />

			<div className='grid lg:grid-cols-2 gap-5'>
				<img src={AboutUsImage} alt='image' className='w-[100%] rounded-lg' />
				<div>
					<Text ff={'Nunito, sans-serif'} fw={600} className='text-left'>
						We are a taxi/livery/non-emergency medical transport business in the
						Hudson, NY area. We take pleasure in getting you from point A to
						point B safely and courteously. We officially started on 8th August
						2019.
						<Space h={10} />
						Cupiditate, quasi! Cum excepturi accusantium aliquid ab earum nulla
						sit inventore iure possimus assumenda tenetur, distinctio magnam!
						Magni quidem a fugiat, aliquid autem et sequi sapiente quaerat saepe
						debitis accusamus minima libero soluta illo, molestias tempore
						nostrum tenetur!
						<Space h={10} />
						Cupiditate, quasi! Cum excepturi accusantium aliquid ab earum nulla
						sit inventore iure possimus assumenda tenetur, distinctio magnam!
						nostrum tenetur!
					</Text>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
