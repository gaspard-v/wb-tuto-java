import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import '../css/display.css';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export default function Display({ data }) {
	const { id } = useParams();
	const [text, setText] = useState(null);
	const [article, setArticle] = useState(null);
	const id_a = id;
	const fetchArticle = () => {
		const article = data.find(
			({ id, options: { hidden } }) => !hidden && id == id_a
		);
		if (!article) return;
		setArticle(article);
		const { filename } = article;
		const article_url = `${BASENAME}/articles/${filename}`;
		fetch(article_url)
			.then(res => res.text())
			.then(text => setText(text))
			.catch(err => console.log(err));
	};

	useEffect(() => {
		//setTimeout(fetchArticle, 5000); //pour le test
		fetchArticle();
	}, []);

	if (!id) {
		return <p>il n'y a rien pour l'instant</p>;
	}
	if (!text) {
		return <p>chargement ...</p>;
	}
	const {
		title,
		description,
		creation_date,
		modification_date,
		tags,
		options: { deprecated },
	} = article;
	return (
		<Box className="display">
			{deprecated && (
				<Box marginTop="10px">
					<Alert severity="warning">This article is deprecated</Alert>
				</Box>
			)}
			{(creation_date || modification_date) && (
				<Box marginTop="10px">
					<Stack direction="row" sx={{ width: '100%' }} spacing={2}>
						{creation_date && <Item>{`creation date: ${creation_date}`}</Item>}
						{modification_date && (
							<Item>{`last modification: ${modification_date}`}</Item>
						)}
					</Stack>
				</Box>
			)}
			{tags && <p>TAGS: {tags.map((tag, index) => `${tag} `)}</p>}
			<Box className="display-header">
				<h1>{title}</h1>
				<h2>{description}</h2>
			</Box>
			<ReactMarkdown
				remarkPlugins={[[remarkToc, { heading: 'sommaire' }]]}
				rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
			>
				{text}
			</ReactMarkdown>
		</Box>
	);
}
