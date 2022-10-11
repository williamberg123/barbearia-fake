import { Table } from './styles';

// eslint-disable-next-line
export default function SchedulingTable({ addScheduling }: { addScheduling: (dateString: string) => void }) {
	return (
		<Table>
			<thead>
				<tr>
					<th>Horário</th>
					<th>Cliente</th>
					<th>Disponibilidade</th>
					<th />
				</tr>
			</thead>

			<tbody>

				<tr>
					<td>8:00</td>
					<td>José Edivar</td>
					<td className={ false ? 'free-time' : 'closed-time' }>Agendado</td>
					<td />
				</tr>
				<tr>
					<td>8:20</td>
					<td>-----</td>
					<td className={ true ? 'free-time' : 'closed-time' }>Livre</td>
					<td>
						<button type="button" onClick={() => addScheduling('820')}>+</button>
					</td>
				</tr>
				<tr>
					<td>8:40</td>
					<td>-----</td>
					<td className={ true ? 'free-time' : 'closed-time' }>Livre</td>
					<td>+</td>
				</tr>
				<tr>
					<td>9:00</td>
					<td>-----</td>
					<td className={ true ? 'free-time' : 'closed-time' }>Livre</td>
					<td>+</td>
				</tr>
				<tr>
					<td>9:20</td>
					<td>-----</td>
					<td className={ true ? 'free-time' : 'closed-time' }>Livre</td>
					<td>+</td>
				</tr>

			</tbody>
		</Table>
	);
}
