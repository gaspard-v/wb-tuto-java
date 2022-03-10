import { render } from 'react-dom';
import Menu from './Menu';
import Navigator from './Navigator';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

const App = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	useEffect(() => {
		fetchData();
	}, []);

	function fetchData() {
		const data_url = `${BASENAME}/src/data.json`;
		fetch(data_url)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				const err = new Error(
					`Error getting "${data_url}" server return: ${response.status} ${response.statusText}`
				);
				err.response = response;
				throw err;
			})
			.then(jsonResponse => setData(jsonResponse))
			.catch(err => {
				setError(err);
				console.error(error);
			});
	}
	function displayApp() {
		if (data) {
			return (
				<BrowserRouter basename={BASENAME}>
					<Menu data={data} />
					<Navigator data={data} />
				</BrowserRouter>
			);
		} else if (error) {
			return <p>{`Une erreur est survenu: ${error}`}</p>;
		} else {
			return <p>Chargement ...</p>;
		}
	}
	return displayApp();
};

render(<App />, document.querySelector('.appContainer'));
