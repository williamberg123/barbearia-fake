import { Navigate, Route, Routes as AppRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Scheduling from './pages/Scheduling';
import ServicesPage from './pages/ServicesPage';

const PrivateRoute = ({ children, isAuth }: { children: any, isAuth: boolean }) => {
	return isAuth ? children : <Navigate to="/login" />;
};

export default function Routes() {
	return (
		<AppRoutes>
			<Route path="/login" element={<Login />} />

			<Route
				path="/"
				element={(
					<PrivateRoute isAuth>
						<Home />
					</PrivateRoute>
				)}
			/>

			<Route
				path="/agendamento"
				element={(
					<PrivateRoute isAuth>
						<Scheduling />
					</PrivateRoute>
				)}
			/>

			<Route
				path="/servicos"
				element={(
					<PrivateRoute isAuth>
						<ServicesPage />
					</PrivateRoute>
				)}
			/>
		</AppRoutes>
	);
}
