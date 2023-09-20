import {
	Box,
	Button,
	Space,
	Text,
	TextInput,
	Textarea,
	Title,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import * as Yup from 'yup';
import ContactUsImage from '../../assets/images/contact.jpg';

const ContactUs = () => {
	const [sending, setSending] = useState(false);

	const contactForm = useRef();

	const form = useForm({
		initialValues: CONTACT_FORM_DEFAULT_VALUES,
		validate: yupResolver(CONTACT_VALIDATION_SCHEMA),
	});

	const handleSubmit = () => {
		setSending(true);
		emailjs
			.sendForm(
				'service_8tbhg0c',
				'template_7o7qa2o',
				contactForm.current!,
				'uue70NypeLCW_OmHX'
			)
			.then(
				() => {
					setSending(false);
					notifications.show({
						title: 'Email successfully sent!',
						message: 'You will get response soon. 🤥',
						color: 'teal',
						icon: <IconCheck size={16} />,
					});
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<Box id='contact_us'>
			<Title
				className='!text-[35px] md:!text-[55px] text-center'
				ff={'Fraunces, serif'}
				fw={800}
				lh={1.2}
				color='dark'
			>
				Get in Touch
			</Title>
			<Text size={'md'} color='dark' fw={500} className='text-center'>
				Book your ride with us
			</Text>

			<Space h={40} />
			<div className='grid lg:grid-cols-2 gap-5'>
				<form
					// @ts-ignore
					ref={contactForm}
					onSubmit={form.onSubmit(handleSubmit)}
				>
					<TextInput
						ff={'Fraunces, serif'}
						label='Your name'
						placeholder='Your name'
						{...form.getInputProps('name')}
						name='name'
					/>
					<TextInput
						ff={'Fraunces, serif'}
						label='Your email'
						placeholder='Your email'
						mt='md'
						{...form.getInputProps('email')}
						name='email'
					/>
					<TextInput
						ff={'Fraunces, serif'}
						label='Subject'
						placeholder='Subject'
						mt='md'
						{...form.getInputProps('subject')}
						name='subject'
					/>
					<Textarea
						ff={'Fraunces, serif'}
						label='Your message'
						placeholder='Your message...'
						mt='md'
						{...form.getInputProps('message')}
						name='message'
					/>
					<Button
						type='submit'
						mt='md'
						ff={'Fraunces, serif'}
						color='dark'
						size='md'
						loading={sending}
					>
						Submit
					</Button>
				</form>
				<img src={ContactUsImage} alt='image' className='w-[100%] rounded-lg' />
			</div>
		</Box>
	);
};

export default ContactUs;

const CONTACT_VALIDATION_SCHEMA = Yup.object().shape({
	name: Yup.string().required().label('Name'),
	email: Yup.string().email().required().label('Email'),
	subject: Yup.string().required().label('Subject'),
	message: Yup.string()
		.max(250, 'Maximum character limits 250')
		.required()
		.label('Message'),
});

const CONTACT_FORM_DEFAULT_VALUES = {
	name: '',
	email: '',
	subject: '',
	message: '',
};
