import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';
export default function MenuItemsInline({ items }) {
	function DisplayMenuInline(items) {
		return items.map(({ name, to, id }) => {
			return (
				<Link
					key={id}
					component={NavLink}
					to={to}
					color="inherit"
					sx={{ mr: 2, color: 'white', display: 'block' }}
				>
					{name}
				</Link>
			);
		});
	}
	return (
		<Typography
			variant="h6"
			noWrap
			component="div"
			sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
		>
			<Box sx={{ flexGrow: 1, display: 'flex' }}>
				{DisplayMenuInline(items)}
			</Box>
		</Typography>
	);
}
