import { NavLink } from 'react-router-dom';
export default function Menu({ data }) {
	const displayMenu = ({ title, description, id }) => {
		return (
			<li key={id}>
				<NavLink to={`/article/${id}`}>
					<h1>{title}</h1>
					<p>{description}</p>
				</NavLink>
			</li>
		);
	};
	return (
		<nav>
			<NavLink to="/">
				<h1>Retour</h1>
			</NavLink>
			<ol>
				{data.filter(({ options: { hidden } }) => !hidden).map(displayMenu)}
			</ol>
		</nav>
	);
}
