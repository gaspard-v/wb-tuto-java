export default function ArticlesList({ data }) {
	return data.map(({ description, id }) => <p key={id}>{description}</p>);
}
