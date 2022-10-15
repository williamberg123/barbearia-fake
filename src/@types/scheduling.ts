import { ChangeEvent } from 'react';

export interface SchedulingType {
	hour: string;
	client_name: string;
}

export interface SchedulingPageContextType {
	time: string;
	isFormVisible: boolean;
	scheduling: SchedulingType[] | null;
	selectedDay: string;
	// eslint-disable-next-line
	handleClickAddScheduling: (hour: string) => void;
	closeForm: () => void;
	// eslint-disable-next-line
	changeSelectedDay: (e: ChangeEvent<HTMLSelectElement>) => void;
}
