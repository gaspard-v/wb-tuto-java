import { Route, Routes } from 'react-router-dom';
import Display from './Display';
export default function Navigator({ data }) {
	return (
		<Routes>
			<Route path="/" element={<Display data={data} />}></Route>
			<Route path="/article/:id" element={<Display data={data} />}></Route>
		</Routes>
	);
}
