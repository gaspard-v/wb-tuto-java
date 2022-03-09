import { render } from 'react-dom';
import Menu from './Menu';
import Navigator from './Navigator';
import { BrowserRouter } from 'react-router-dom';
import data from './data.json';

render(
	<BrowserRouter>
		<Menu data={data} />
		<Navigator data={data} />
	</BrowserRouter>,
	document.querySelector('.appContainer')
);
