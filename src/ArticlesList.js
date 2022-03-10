export default function ArticlesList({ data }) {
	return data.map(({ description }) => <p>{description}</p>);
}
