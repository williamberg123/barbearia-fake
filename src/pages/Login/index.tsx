import { signInWithEmailAndPassword } from 'firebase/auth';
import { FieldValues, useForm } from 'react-hook-form';
import Form from '../../components/Form';
import { auth } from '../../services/Firebase';
import { Container } from './styles';

export default function Login() {
	const { handleSubmit, register } = useForm();

	const onSubmit = async (data: FieldValues) => {
		const { user_email, user_password } = data;
		await signInWithEmailAndPassword(auth, user_email, user_password);
	};

	return (
		<Container>
			<h1>Login</h1>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<span>
					Email
					<input type="email" {...register('user_email', { required: true })} />
				</span>

				<span>
					Password
					<input type="password" {...register('user_password', { required: true })} />
				</span>

				<input type="submit" value="Entrar" />
			</Form>
		</Container>
	);
}
