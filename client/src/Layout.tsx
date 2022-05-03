import { lazy, Suspense } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RoutePath } from "./constants";
import { isAuthenticated } from "./isAuthenticated";

const NavbarAsync = lazy(() => import('./Navbar'));

const Layout = () => {
	const location = useLocation();

	if (!isAuthenticated()) {
		return <Navigate to={RoutePath.login} state={{ from: location }} replace />;
	}

	return (
		<Suspense fallback="loading...">
			<NavbarAsync />
			<Outlet />
		</Suspense>
	)
};

export default Layout;
function useHistory() {
	throw new Error("Function not implemented.");
}

