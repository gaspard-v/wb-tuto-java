import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';

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
	return <ReactMarkdown>{mainpage}</ReactMarkdown>;
}
