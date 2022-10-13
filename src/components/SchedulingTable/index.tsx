import TableItem from '../TableItem';
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

				<TableItem
					data={{
						client_name: 'José Edivar',
					}}
					hour="8:00"
					addScheduling={addScheduling}
				/>

				<TableItem
					data={null}
					hour="8:20"
					addScheduling={addScheduling}
				/>

				<TableItem
					data={{
						client_name: 'William Berg',
					}}
					hour="8:40"
					addScheduling={addScheduling}
				/>

				<TableItem
					data={{
						client_name: 'Paulo Henrique',
					}}
					hour="9:00"
					addScheduling={addScheduling}
				/>

				<TableItem
					data={null}
					hour="9:20"
					addScheduling={addScheduling}
				/>
			</tbody>
		</Table>
	);
}
