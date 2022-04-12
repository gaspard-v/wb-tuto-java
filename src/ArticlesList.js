import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';

export default function ArticlesList({ data }) {
	return (
		<>
			{data.map(
				({ description, id, options: { hidden } }) =>
					hidden || (
						<Link
							key={id}
							component={NavLink}
							to={`/article/${id}`}
							color="inherit"
							sx={{ mr: 2, color: 'black', display: 'block' }}
						>
							{description}
						</Link>
					)
			)}
		</>
	);
}
