import Menu from './Menu';
import Navigator from './Navigator';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

export default function App() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	useEffect(() => {
		setTimeout(fetchData, 5000);
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
			return (
				<Alert
					severity="error"
					action={
						<Button color="inherit" size="small" onClick={() => fetchData()}>
							Réessayer
						</Button>
					}
				>
					<AlertTitle>Erreur !</AlertTitle>
					Il y une erreur ! <strong>{error.message}</strong>
				</Alert>
			);
		} else {
			return (
				<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justifyContent="center"
					style={{ minHeight: '100vh' }}
				>
					<Grid item xs={2}>
						<CircularProgress />
						<p>chargement...</p>
					</Grid>
				</Grid>
			);
		}
	}
	return <Container maxWidth="">{displayApp()}</Container>;
}
