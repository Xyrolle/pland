import { Navigate, useLocation } from 'react-router-dom';

import { isAuthenticated } from './isAuthenticated';
import Login from './Login';

type Props = {
	children?: JSX.Element
};

const ProtectedRoute = ({ children }: Props): JSX.Element => {
	const location = useLocation();

	if (!isAuthenticated()) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children ?? <Login />;
};

export default ProtectedRoute;