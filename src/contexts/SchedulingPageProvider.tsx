import { ChangeEvent, createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { SchedulingPageContextType, SchedulingType } from '../@types/scheduling';
import { getDayClientsList } from '../services/fbActions/getDayClientsList';
import { AuthContext, AuthContextType } from './AuthProvider';

export const SchedulingPageContext = createContext<SchedulingPageContextType | null>(null);

export default function SchedulingPageProvider({ children }: { children: ReactNode }) {
	const [time, setTime] = useState<string>('');
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [scheduling, setScheduling] = useState<SchedulingType[] | null>(null);
	const [ selectedDay, setSelectedDay ] = useState(() => {
		return new Date().toLocaleDateString('pt-BR').replaceAll('/', '');
	});

	const { user } = useContext(AuthContext) as AuthContextType;

	const changeSelectedDay = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
		setScheduling(null);
		setSelectedDay(e.target.value);
	}, []);

	const handleClickAddScheduling = useCallback((hour: string) => {
		setTime(hour);
		setIsFormVisible(true);
	}, []);

	const getScheduling = async () => {
		const fetchedScheduling = await getDayClientsList(selectedDay);
		setScheduling(fetchedScheduling);
	};

	const closeForm = () => {
		setIsFormVisible(false);
	};

	useEffect(() => {
		if (user) {
			getScheduling();
		}
	}, [scheduling, selectedDay, user]);

	const context = useMemo(() => ({
		time, isFormVisible, scheduling, selectedDay, handleClickAddScheduling, closeForm, changeSelectedDay,
	}), [time, isFormVisible, scheduling, selectedDay, handleClickAddScheduling, closeForm, changeSelectedDay]);

	return (
		<SchedulingPageContext.Provider value={context}>
			{children}
		</SchedulingPageContext.Provider>
	);
}
