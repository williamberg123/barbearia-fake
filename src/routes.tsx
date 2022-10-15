import { useContext } from 'react';
import { Navigate, Route, Routes as AppRoutes } from 'react-router-dom';
import { AuthContext, AuthContextType } from './contexts/AuthProvider';
import Home from './pages/Home';
import Login from './pages/Login';
import Scheduling from './pages/Scheduling';
import ServicesPage from './pages/ServicesPage';

const PrivateRoute = ({ children, isAuth, path }: { children: any; isAuth: boolean; path: string; }) => {
	return isAuth ? children : <Navigate to={path} />;
};

export default function Routes() {
	const { user } = useContext(AuthContext) as AuthContextType;

	return (
		<AppRoutes>
			<Route
				path="/login"
				element={(
					<PrivateRoute isAuth={!user} path="/">
						<Login />
					</PrivateRoute>
				)}
			/>

			<Route
				path="/"
				element={(
					<PrivateRoute isAuth={!!user} path="/login">
						<Home />
					</PrivateRoute>
				)}
			/>

			<Route
				path="/agendamento"
				element={(
					<PrivateRoute isAuth={!!user} path="/login">
						<Scheduling />
					</PrivateRoute>
				)}
			/>

			<Route
				path="/servicos"
				element={(
					<PrivateRoute isAuth={!!user} path="/login">
						<ServicesPage />
					</PrivateRoute>
				)}
			/>
		</AppRoutes>
	);
}
