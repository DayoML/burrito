import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { Link } from 'react-router-dom';
import awsExports from './aws-exports';
import MainApp from './route';

Amplify.configure(awsExports);

const Nav = () => (
	<nav>
		<ul>
			<li>
				<Link to="/">New</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/page1">Users</Link>
			</li>
		</ul>
	</nav>
);

export default function App() {
	return (
		<Authenticator>
			{({ signOut, user }) => (
				<main>
					<h2>Burrito App</h2>
					{/* navigation */}
					<Nav />
					<MainApp />
					<Link to="/page1">page1</Link>
					<button onClick={signOut}>Sign out</button>
				</main>
			)}
		</Authenticator>
	);
}
