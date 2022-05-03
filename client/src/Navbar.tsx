import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<Link to='/home'>home</Link>
				</li>
				<li>
					projects
				</li>
			</ul>
		</nav>
	)
};

export default Navbar;
