import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import '../css/display.css';

export default function Display({ data }) {
	const { id } = useParams();
	const [article, setArticle] = useState(null);
	const id_a = id;
	const fetchArticle = () => {
		const article = data.find(
			({ id, options: { hidden } }) => !hidden && id == id_a
		);
		if (!article) return;
		const { filename } = article;
		const article_url = `${BASENAME}/articles/${filename}`;
		fetch(article_url)
			.then(res => res.text())
			.then(text => setArticle(text))
			.catch(err => console.log(err));
	};

	useEffect(() => {
		//setTimeout(fetchArticle, 5000); //pour le test
		fetchArticle();
	}, []);

	if (!id) {
		return <p>il n'y a rien pour l'instant</p>;
	}
	if (!article) {
		return <p>chargement ...</p>;
	}

	return (
		<Box className="display">
			<ReactMarkdown>{article}</ReactMarkdown>
		</Box>
	);
}
