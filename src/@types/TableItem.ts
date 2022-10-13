export interface TableItemProps {
	hour: string;
	data: {
		client_name: string;
	} | null;
	// eslint-disable-next-line
	addScheduling: (hour: string) => void;
}
