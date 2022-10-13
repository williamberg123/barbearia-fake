import { useContext, useEffect, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { RiCloseCircleFill } from 'react-icons/ri';
import { AppContextType } from '../../@types/appContext';
import DateSelect from '../../components/DateSelect';
import Form from '../../components/Form';
import SchedulingTable from '../../components/SchedulingTable';
import { AppContext } from '../../contexts/AppProvider';
import { getDayClientsList } from '../../services/fbActions/getDayClientsList';
import { CloseForm, Container, DarkBackground, Title } from './styles';

export default function Scheduling() {
	const [time, setTime] = useState<string>('');
	const [isFormVisible, setIsFormVisible] = useState(false);
	const { changePage } = useContext(AppContext) as AppContextType;

	useEffect(() => {
		changePage('schedule');
	}, []);

	const addScheduling = (hour: string) => {
		setTime(hour);
		setIsFormVisible(true);
	};

	const { register, handleSubmit } = useForm();

	const onSubmit = (data: FieldValues) => {
		console.log(data);
	};

	useEffect(() => {
		getDayClientsList('11092022');
	}, []);

	return (
		<Container>
			<Title>Lista de agendamentos</Title>
			<DateSelect formRegister={register('date_selection', { required: true })} />
			<SchedulingTable addScheduling={addScheduling} />
			{
				isFormVisible && (
					<>
						<Form onSubmit={handleSubmit(onSubmit)}>
							<input type="hidden" {...register('hour')} />
							<h2>AGENDAMENTO</h2>
							<span>Horário: {time} hrs</span>
							<label htmlFor="client-name">
								Seu nome
								<input {...register('client_name', { required: true })} id="client-name" type="text" placeholder="Digite seu nome" />
							</label>
							<input type="submit" value="Agendar" />
						</Form>
						<CloseForm onClick={() => setIsFormVisible(false)}>
							<RiCloseCircleFill />
						</CloseForm>

						<DarkBackground />
					</>
				)
			}
		</Container>
	);
}
