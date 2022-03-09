import data from './data.json';
export default function Menu() {
	const displayMenu = ({ title, description, id }) => {
		return (
			<li key={id}>
				<h1>{title}</h1>
				<p>{description}</p>
			</li>
		);
	};
	return (
		<nav>
			<ol>
				{data.filter(({ options: { hidden } }) => !hidden).map(displayMenu)}
			</ol>
		</nav>
	);
}
