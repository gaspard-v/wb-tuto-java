import * as React from 'react';
import List from '@mui/material/List';
import ArticlesListItems from './ArticlesListItems';

export default function ArticlesList({ data }) {
	return (
		<List
			sx={{
				width: '100%',
				maxWidth: 1024,
				my: 2,
				bgcolor: 'background.paper',
			}}
		>
			{data.map((article, index) => {
				return <ArticlesListItems key={index} article={article} />;
			})}
		</List>
	);
}
