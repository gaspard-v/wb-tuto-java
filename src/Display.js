import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default function Display({ data }) {
	const { id } = useParams();
	if (!id) {
		return <p>il n'y a rien pour l'instant</p>;
	}
	const id_a = id;
	const article = data => {
		const retour = data.find(
			({ id, options: { hidden } }) => !hidden && id == id_a
		);
		if (!retour) return;
		return decodeURIComponent(retour.content);
	};
	return <ReactMarkdown>{article(data)}</ReactMarkdown>;
}
