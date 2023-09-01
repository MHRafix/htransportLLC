import { Container, NavLink } from '@mantine/core';
import React from 'react';

const AppHeader: React.FC = () => {
	const menus = [
		{
			label: 'Home',
			navigatorId: '#home',
		},
		{
			label: 'About',
			navigatorId: '#about_us',
		},
		{
			label: 'Success',
			navigatorId: '#success',
		},
		{
			label: 'Features',
			navigatorId: '#features',
		},
	];
	return (
		<Container
			size='lg'
			py='sm'
			px={'lg'}
			h={80}
			className='bg-[#fff] flex items-center justify-between absolute w-full top-8 rounded-lg'
		>
			<div className='logo_area'>HTransportLLC</div>
			<div className='menu_area'>
				{menus.map((menu, idx) => (
					<NavLink
						key={idx}
						label={menu?.label}
						fw={500}
						active={false}
						color='#FFCC00'
						mx={5}
					/>
				))}
			</div>
		</Container>
	);
};

export default AppHeader;
