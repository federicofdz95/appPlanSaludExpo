
import Login from './src/Login';
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';


export default function Main() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

