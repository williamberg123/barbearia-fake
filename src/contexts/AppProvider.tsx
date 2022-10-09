import { createContext, useCallback, useMemo, useState } from 'react';
import { AppContextType } from '../@types/appContext';

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: any }) => {
	const [ page, setPage ] = useState('home');

	const changePage = useCallback((p: string) => {
		setPage(p);
	}, []);

	const context = useMemo<AppContextType>(() => ({
		page, changePage,
	}), [page, changePage]);

	return (
		<AppContext.Provider value={context}>
			{children}
		</AppContext.Provider>
	);
};
