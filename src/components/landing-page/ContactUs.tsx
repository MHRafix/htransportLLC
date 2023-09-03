import {
	Box,
	Button,
	Code,
	Space,
	Text,
	TextInput,
	Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import ContactUsImage from '../../assets/images/contact.jpg';

const ContactUs = () => {
	const [submittedValues, setSubmittedValues] = useState('');

	const form = useForm({
		initialValues: {
			firstName: 'Jane',
			lastName: 'Doe',
			age: '33',
		},

		transformValues: (values) => ({
			fullName: `${values.firstName} ${values.lastName}`,
			age: Number(values.age) || 0,
		}),
	});
	return (
		<Box>
			<Title
				className='!text-[35px] md:!text-[55px] text-center'
				ff={'Nunito, sans-serif'}
				fw={800}
				lh={1.2}
				color='yellow'
			>
				Get in Touch
			</Title>
			<Text size={'md'} color='red' fw={500} className='text-center'>
				Book your ride with us
			</Text>

			<Space h={40} />
			<div className='grid lg:grid-cols-2 gap-5'>
				<form
					onSubmit={form.onSubmit((values) =>
						setSubmittedValues(JSON.stringify(values, null, 2))
					)}
				>
					<TextInput
						label='Full name'
						placeholder='Full name'
						{...form.getInputProps('firstName')}
					/>
					<TextInput
						label='Last name'
						placeholder='Last name'
						mt='md'
						{...form.getInputProps('lastName')}
					/>
					<TextInput
						type='number'
						label='Age'
						placeholder='Age'
						mt='md'
						{...form.getInputProps('age')}
					/>
					<Button type='submit' mt='md'>
						Submit
					</Button>
				</form>
				<img src={ContactUsImage} alt='image' className='w-[100%] rounded-lg' />
			</div>
			{submittedValues && <Code block>{submittedValues}</Code>}
		</Box>
	);
};

export default ContactUs;
