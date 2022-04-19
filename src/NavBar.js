import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

const pages = [
	{
		name: 'Accueil',
		to: '/',
		id: 'accueil',
	},
	{
		name: 'Liste des articles',
		to: '/article',
		id: 'article',
	},
];

const navBarTitle = 'Tutos Java et JavaFX';

const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = event => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static" className="navbar">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
					>
						{navBarTitle}
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="button of menu"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map(({ name, id, to }) => (
								<Link key={id} component={NavLink} to={to} color="inherit">
									<MenuItem key={id} onClick={handleCloseNavMenu}>
										<Typography textAlign="center">{name}</Typography>
									</MenuItem>
								</Link>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
					>
						{navBarTitle}
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map(({ name, id, to }) => (
							<Link key={id} component={NavLink} to={to} color="inherit">
								<Button
									key={id}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'white', display: 'block' }}
								>
									{name}
								</Button>
							</Link>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavBar;
