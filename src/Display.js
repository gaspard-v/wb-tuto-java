import { useParams } from 'react-router-dom';

export default function Display({ data }) {
	const { id } = useParams();
	if (!id) {
		return <p>il n'y a rien pour l'instant</p>;
	}
	const id_a = id;
	return data.find(({ id }) => id == id_a).content;
}
