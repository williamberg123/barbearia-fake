import { UseFormRegisterReturn } from 'react-hook-form';
import { generateDateString } from '../../utils/generateDateString';
import { Container } from './styles';

// eslint-disable-next-line
export default function DateSelect({ formRegister }: { formRegister: UseFormRegisterReturn }) {
	const today = generateDateString();
	const tomorrow = generateDateString(1);

	return (
		<Container {...formRegister}>
			<option value={today}>Hoje</option>
			<option value={tomorrow}>Amanhã</option>
		</Container>
	);
}
