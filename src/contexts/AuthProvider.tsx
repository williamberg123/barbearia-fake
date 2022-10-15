import { onAuthStateChanged, User } from 'firebase/auth';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { auth } from '../services/Firebase';

export interface AuthContextType {
	user: User | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [ user, setUser ] = useState<User | null>(null);

	const logUser = (u: User) => {
		setUser(u);
	};

	useEffect(() => {
		onAuthStateChanged(auth, (u) => {
			if (!u) return;
			logUser(u);
		});
	}, []);

	const context = useMemo(() => ({
		user,
	}), [user]);

	return (
		<AuthContext.Provider value={context}>
			{children}
		</AuthContext.Provider>
	);
};
