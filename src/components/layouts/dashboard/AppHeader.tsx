import { Container, NavLink, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';

const AppHeader: React.FC = () => {
	const [path, setPath] = useState<string>();

	useEffect(() => {
		setPath(window.location.hash as string);
	}, [window.location.hash]);

	console.log(path);
	return (
		<Container
			size='lg'
			py='sm'
			px={'lg'}
			// h={80}
			className='bg-[#fff] md:flex items-center justify-between fixed shadow-lg w-full top-8 rounded-lg z-10'
		>
			<Title
				className='md:text-left text-center md:mb-0 mb-2'
				order={3}
				color='yellow'
				ff={'Nunito, sans-serif'}
				fw={700}
				mt={3}
			>
				H.TRANSPORT.LLC
			</Title>
			<div className='menu_area md:mt-0 mt-2'>
				{menus.map((menu, idx) => (
					<NavLink
						onClick={() => setPath(menu?.navigatorId)}
						ff={"Nunito, sans-serif"}
						key={idx}
						fw={500}
						color='yellow'
						mx={15}
						component='a'
						active={menu?.navigatorId === path}
						href={menu?.navigatorId}
						label={menu?.label}
					/>
				))}
			</div>
		</Container>
	);
};

export default AppHeader;

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
		navigatorId: '#success_history',
	},
	{
		label: 'Contact',
		navigatorId: '#contact_us',
	},
];
