import { MantineProvider } from '@mantine/core';
import React, { PropsWithChildren } from 'react';
import { hTransportLLCEmotionCache } from '../../utils/emotionCache';
import { Notifications } from '@mantine/notifications';

const MantineProviderWrapper: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			emotionCache={hTransportLLCEmotionCache}
			theme={{
				breakpoints: {
					xs: '30em',
					sm: '48em',
					md: '64em',
					lg: '74em',
					xl: '90em',
				},
			}}
		>
			<Notifications />

			{children}
		</MantineProvider>
	);
};

export default MantineProviderWrapper;
