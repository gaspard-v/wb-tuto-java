import { NavLink } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';

export default function Menu({ data }) {
	const displayMenu = ({ title, description, id }) => {
		return (
			<li key={id}>
				<NavLink to={`/article/${id}`}>
					<h1>{title}</h1>
					<p>{description}</p>
				</NavLink>
			</li>
		);
	};
	const menuItems = [
		{
			name: 'Accueil',
			to: '/',
		},
		{
			name: 'Liste des articles',
			to: '/article',
		},
	];
	return (
		<nav>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="open drawer"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>

						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
						>
							<Box sx={{ flexGrow: 1, display: 'flex' }}>
								{menuItems.map(({ name, to }) => {
									return (
										<Link
											component={NavLink}
											to={to}
											color="inherit"
											sx={{ mr: 2, color: 'white', display: 'block' }}
										>
											{name}
										</Link>
									);
								})}
							</Box>
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
		</nav>
	);
	<ol>{data.filter(({ options: { hidden } }) => !hidden).map(displayMenu)}</ol>;
}
