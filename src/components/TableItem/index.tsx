import { useContext } from 'react';
import { SchedulingPageContextType } from '../../@types/scheduling';
import { SchedulingPageContext } from '../../contexts/SchedulingPageProvider';
import { Tr } from './styles';

export default function TableItem({ hour }: { hour: string }) {
	const { scheduling, handleClickAddScheduling } = useContext(SchedulingPageContext) as SchedulingPageContextType;
	const data = scheduling?.find((item) => item.hour === hour);

	return (
		<Tr>
			<td>{hour}</td>
			<td>
				{
					data
					? data?.client_name
					: '-----'
				}
			</td>
			<td className={!data ? 'free-time' : 'closed-time'}>
				{
					data
					? 'Agendado'
					: 'Livre'
				}
			</td>
			<td>
				{
					!data && (
						<button type="button" onClick={() => handleClickAddScheduling(hour)}>+</button>
					)
				}
			</td>
		</Tr>
	);
}
