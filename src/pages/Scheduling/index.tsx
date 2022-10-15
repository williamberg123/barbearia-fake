import { useContext, useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { RiCloseCircleFill } from 'react-icons/ri';
import { Vortex } from 'react-loader-spinner';

import { AppContextType } from '../../@types/appContext';
import { AppContext } from '../../contexts/AppProvider';

import SchedulingTable from '../../components/SchedulingTable';
import DateSelect from '../../components/DateSelect';
import Form from '../../components/Form';

import { addNewScheduling } from '../../services/fbActions/addScheduling';

import { CloseForm, Container, DarkBackground, Title } from './styles';
import { SchedulingPageContext } from '../../contexts/SchedulingPageProvider';
import { SchedulingPageContextType } from '../../@types/scheduling';

export default function Scheduling() {
	const { changePage } = useContext(AppContext) as AppContextType;
	const { closeForm, isFormVisible, time, changeSelectedDay, scheduling } = useContext(SchedulingPageContext) as SchedulingPageContextType;

	useEffect(() => {
		changePage('schedule');
	}, []);

	const { register, handleSubmit } = useForm();

	const onSubmit = async (data: FieldValues, hour: string) => {
		await addNewScheduling(data, hour);
		closeForm();
	};

	return (
		<Container>
			<Title>Lista de agendamentos</Title>
			<DateSelect formRegister={register('date_selection', { required: true, onChange: changeSelectedDay })} />

			{
				scheduling
				? <SchedulingTable />
				: <Vortex />
			}

			{
				isFormVisible && (
					<>
						<Form onSubmit={handleSubmit((data) => onSubmit(data, time))}>
							<h2>AGENDAMENTO</h2>
							<span>Horário: {time} hrs</span>
							<label htmlFor="client-name">
								Seu nome
								<input {...register('client_name', { required: true })} id="client-name" type="text" placeholder="Digite seu nome" />
							</label>
							<button type="submit">
								Agendar
							</button>
						</Form>
						<CloseForm onClick={closeForm}>
							<RiCloseCircleFill />
						</CloseForm>

						<DarkBackground />
					</>
				)
			}
		</Container>
	);
}
