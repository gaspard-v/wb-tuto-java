export default function ArticlesList({ data }) {
	return data.map(
		({ description, id, options: { hidden } }) =>
			hidden || <p key={id}>{description}</p>
	);
}
