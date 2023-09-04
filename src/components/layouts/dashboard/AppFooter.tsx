import { Button, Container, Text } from '@mantine/core';
import {
	IconBrandFacebook,
	IconMail,
	IconMap2,
	IconPhone,
} from '@tabler/icons-react';

const AppFooter = () => {
	return (
		<div className='py-5 px-4 border-t-[1px] border-solid border-t-slate-200'>
			<Container
				size='lg'
				py='sm'
				className='md:flex items-center justify-between gap-5'
			>
				<Text ff={'Nunito, sans-serif'} color='gray' size={'sm'}>
					All rights reserved by H.TRANSPORT.LLC © 2023
				</Text>
				<div className='md:flex items-center md:mt-0 mt-2'>
					<Button
						variant='subtle'
						color='yellow'
						leftIcon={<IconPhone size={20} />}
						ff={'Nunito, sans-serif'}
					>
						5183642364
					</Button>
					<Button
						variant='subtle'
						color='yellow'
						leftIcon={<IconMail size={20} />}
						ff={'Nunito, sans-serif'}
					>
						Info@htransportllc.com
					</Button>
					<Button
						variant='subtle'
						color='yellow'
						leftIcon={<IconMap2 size={20} />}
						ff={'Nunito, sans-serif'}
					>
						Hudson NY, USA
					</Button>
					<Button
						variant='subtle'
						color='yellow'
						component='a'
						target='_blank'
						rel='noopener noreferrer'
						href='https://m.facebook.com/profile.php/?id=100028312376950&name=xhp_nt__fb__action__open_user'
						leftIcon={<IconBrandFacebook size={20} />}
						ff={'Nunito, sans-serif'}
					>
						Facebook
					</Button>
					{/* Columbia St, Hudson, New York 12534, United States */}
				</div>
			</Container>
		</div>
	);
};

export default AppFooter;
