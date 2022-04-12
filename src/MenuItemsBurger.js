import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
export default function MenuItemsBurger({ items }) {
	const handleInconClick = () => {};
	return (
		<div>
			<List>
				<IconButton
					id="menu-button"
					size="large"
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={handleInconClick}
					sx={{ mr: 2 }}
				>
					<MenuIcon />
				</IconButton>
			</List>
			<Menu open={false}>
				<MenuItem>okeki</MenuItem>
			</Menu>
		</div>
	);
}
