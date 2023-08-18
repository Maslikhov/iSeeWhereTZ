import * as React from 'react';
import {DOMAIN_URL, CLIENT_ID} from './src/Auth0/config';
import RootContainer from './src/Navigation';
import {Auth0Provider} from 'react-native-auth0';
import {PaperProvider} from 'react-native-paper';

function App() {
  return (
    <PaperProvider>
      <Auth0Provider domain={DOMAIN_URL} clientId={CLIENT_ID}>
        <RootContainer />
      </Auth0Provider>
    </PaperProvider>
  );
}

export default App;
