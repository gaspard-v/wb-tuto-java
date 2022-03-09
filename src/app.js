import { render } from 'react-dom';
import Menu from './Menu';
import Navigator from './Navigator';
import { BrowserRouter } from 'react-router-dom';

render(
	<BrowserRouter>
		<Menu></Menu>
		<Navigator></Navigator>
	</BrowserRouter>,
	document.querySelector('.appContainer')
);
