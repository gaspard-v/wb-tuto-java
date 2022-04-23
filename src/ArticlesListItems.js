import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';

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
	const displayTags = () => {
		if (tags.length === 0) return null;
		return (
			<>
				<br />
				<Typography component={'span'} variant="inherit" color="textSecondary">
					{'TAGS: '}
					{tags.map((tag, index) => {
						return `${tag} ${index === tags.length - 1 ? '' : ' | '}`;
					})}
				</Typography>
			</>
		);
	};
	return (
		<Link
			key={id}
			component={NavLink}
			to={`/article/${id}`}
			color="inherit"
			sx={{ mr: 2, color: 'black', display: 'block' }}
			className={depreciated ? 'depreciated' : ''}
		>
			{depreciated && (
				<Box px="13px" color="#ff7300">
					DEPRECIATED
				</Box>
			)}
			<ListItem alignItems="flex-start">
				<ListItemText
					primary={title}
					secondary={
						<React.Fragment>
							<Typography
								sx={{ display: 'inline' }}
								component="span"
								variant="body2"
								color="text.primary"
							>
								{description}
							</Typography>
							{displayTags()}
						</React.Fragment>
					}
				/>
			</ListItem>
		</Link>
	);
}

export default ArticlesListItems;
