import { Route, Routes } from 'react-router-dom';
import ArticlesList from './ArticlesList';
import Display from './Display';
import MainPage from './MainPage';
export default function Navigator({ data }) {
	return (
		<Routes>
			<Route path="/" element={<MainPage />}></Route>
			<Route path="/article" element={<ArticlesList data={data} />}></Route>
			<Route path="/article/:id" element={<Display data={data} />}></Route>
		</Routes>
	);
}
