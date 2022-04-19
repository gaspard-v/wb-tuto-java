import * as React from 'react';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function ArticlesList({ data }) {
	return (
		<>
			{data.map(
				// ({ description, id, options: { hidden } }) =>
				// 	hidden || (
				// 		<Link
				// 			key={id}
				// 			component={NavLink}
				// 			to={`/article/${id}`}
				// 			color="inherit"
				// 			sx={{ mr: 2, color: 'black', display: 'block' }}
				// 		>
				// 			{description}
				// 		</Link>
				// 	)
				<List
					sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
				>
					<ListItem alignItems="flex-start">
						<ListItemText
							primary="Brunch this weekend?"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: 'inline' }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Ali Connors
									</Typography>
									{" — I'll be in your neighborhood doing errands this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
				</List>
			)}
		</>
	);
}
