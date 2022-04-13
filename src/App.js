import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BurritoChannelCreate  } from "./ui-components";

import awsExports from './aws-exports';
import { Link } from 'react-router-dom';
Amplify.configure(awsExports);


export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          
          <h2>Rocket</h2>
          <BurritoChannelCreate />
          <Link to= "/page1">page1</Link>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}