import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';

export function ArticlesListItems({ article }) {
	const {
		title,
		description,
		id,
		tags,
		filename,
		options: { hidden, depreciated },
	} = article;
	if (hidden) return null;
	return (
		<Link
			key={id}
			component={NavLink}
			to={`/article/${id}`}
			color="inherit"
			sx={{ mr: 2, color: 'black', display: 'block' }}
		>
			<ListItem alignItems="flex-start">
				<ListItemText
					primary={title}
					secondary={
						<React.Fragment>
							<Typography
								sx={{ display: 'inline' }}
								component="span"
								variant="body2"
								color="text.secondary"
							>
								{description}
							</Typography>
						</React.Fragment>
					}
				/>
			</ListItem>
		</Link>
	);
}

export default ArticlesListItems;
