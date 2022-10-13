import { TableItemProps } from '../../@types/TableItem';
import { Tr } from './styles';

export default function TableItem({ hour, data, addScheduling }: TableItemProps) {
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
						<button type="button" onClick={() => addScheduling(hour)}>+</button>
					)
				}
			</td>
		</Tr>
	);
}
