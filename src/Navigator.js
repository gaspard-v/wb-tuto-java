import { Route, Routes } from 'react-router-dom';
import Display from './Display';
export default function Navigator() {
	return (
		<Routes>
			<Route path="/" element={<Display />}></Route>
			<Route path="/article/:id" element={<Display />}></Route>
		</Routes>
	);
}
