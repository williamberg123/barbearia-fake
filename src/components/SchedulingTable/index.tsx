import TableItem from '../TableItem';
import { Table } from './styles';

export default function SchedulingTable() {
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

				<TableItem
					hour="8:00"
				/>

				<TableItem
					hour="8:20"
				/>

				<TableItem
					hour="8:40"
				/>

				<TableItem
					hour="9:00"
				/>

				<TableItem
					hour="9:20"
				/>

				<TableItem
					hour="9:40"
				/>

				<TableItem
					hour="10:00"
				/>

				<TableItem
					hour="10:20"
				/>

				<TableItem
					hour="10:40"
				/>

				<TableItem
					hour="11:00"
				/>

				<TableItem
					hour="11:20"
				/>

				<TableItem
					hour="11:40"
				/>

				<TableItem
					hour="12:00"
				/>

				<TableItem
					hour="14:30"
				/>

				<TableItem
					hour="14:50"
				/>

				<TableItem
					hour="15:10"
				/>

				<TableItem
					hour="15:30"
				/>

				<TableItem
					hour="15:50"
				/>
			</tbody>
		</Table>
	);
}
