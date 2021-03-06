import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import '../css/main-page.css';

export default function MainPage() {
	const [mainpage, setMainpage] = useState(null);
	const fetchMainPage = () => {
		const mainpage_url = `${BASENAME}/articles/mainpage.md`;
		fetch(mainpage_url)
			.then(res => res.text())
			.then(text => setMainpage(text))
			.catch(err => console.log(err));
	};
	useEffect(() => {
		fetchMainPage();
	}, []);
	if (!mainpage) return <p>chargement ...</p>;
	return (
		<Box className="main-page">
			<ReactMarkdown>{mainpage}</ReactMarkdown>
		</Box>
	);
}
