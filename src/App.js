import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BurritoChannelCreate  } from "./ui-components";

import awsExports from './aws-exports';
Amplify.configure(awsExports);


export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          
          <h2>Rocket</h2>
          <BurritoChannelCreate />
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}