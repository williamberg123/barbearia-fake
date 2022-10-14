import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { SchedulingPageContextType, SchedulingType } from '../@types/scheduling';
import { getDayClientsList } from '../services/fbActions/getDayClientsList';

export const SchedulingPageContext = createContext<SchedulingPageContextType | null>(null);

export default function SchedulingPageProvider({ children }: { children: ReactNode }) {
	const [time, setTime] = useState<string>('');
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [scheduling, setScheduling] = useState<SchedulingType[] | null>(null);

	const handleClickAddScheduling = useCallback((hour: string) => {
		setTime(hour);
		setIsFormVisible(true);
	}, []);

	const getScheduling = async () => {
		const fetchedScheduling = await getDayClientsList('13102022');
		setScheduling(fetchedScheduling);
	};

	const closeForm = () => {
		setIsFormVisible(false);
	};

	useEffect(() => {
		getScheduling();
	}, [scheduling]);

	const context = useMemo(() => ({
		time, isFormVisible, scheduling, handleClickAddScheduling, closeForm,
	}), [time, isFormVisible, scheduling, handleClickAddScheduling, closeForm]);

	return (
		<SchedulingPageContext.Provider value={context}>
			{children}
		</SchedulingPageContext.Provider>
	);
}
