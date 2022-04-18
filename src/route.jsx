import { Route, Routes } from 'react-router-dom';
import About from './About';
import Page1 from './Page1';
import Page2 from './Page2';
import { BurritoChannelCreate } from './ui-components';

export default function App() {
	return (
		<div>
			{/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
			<Routes>
				<Route path="/" element={<BurritoChannelCreate />} />
				<Route path="/about" element={<About />} />
				<Route path="/page1" element={<Page1 />} />
				<Route path="/page2" element={<Page2 />} />
				<Route path="/create" element={<BurritoChannelCreate />} />
			</Routes>
		</div>
	);
}
