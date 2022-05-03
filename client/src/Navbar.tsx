import { Link } from "react-router-dom";

import { RoutePath } from "./constants";
import ThemeToggleIcon from "./ThemeToggleIcon";

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<Link to={RoutePath.projects}>projects</Link>
				</li>
				<li>
					<Link to={RoutePath.profile}>profile</Link>
				</li>
				<li>
					<ThemeToggleIcon />
				</li>
			</ul>
		</nav>
	)
};

export default Navbar;
