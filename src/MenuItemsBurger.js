import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
export default function MenuItemsBurger({ items }) {
	return (
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="open drawer"
			sx={{ mr: 2 }}
		>
			<MenuIcon />
		</IconButton>
	);
}
