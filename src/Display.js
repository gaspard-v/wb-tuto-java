import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import '../css/display.css';
import remarkToc from 'remark-toc';

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
	//TODO https://github.com/remarkjs/remark-toc#example-a-different-heading=
	return (
		<Box className="display">
			<ReactMarkdown remarkPlugins={[[remarkToc, { heading: 'sommaire' }]]}>
				{article}
			</ReactMarkdown>
		</Box>
	);
}
