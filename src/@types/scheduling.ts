export interface SchedulingType {
	hour: string;
	client_name: string;
}

export interface SchedulingPageContextType {
	time: string;
	isFormVisible: boolean;
	scheduling: SchedulingType[] | null;
	// eslint-disable-next-line
	handleClickAddScheduling: (hour: string) => void;
	closeForm: () => void;
}
