import { StatusBar } from 'expo-status-bar';
import * as SecureStore from "expo-secure-store";
import { NhostClient, NhostProvider } from '@nhost/react';

import Navigation from './navigation';

const nhost = new NhostClient({
  subdomain: 'ibcqjvxouabmgbluekcc',
  region: 'ap-south-1',
  clientStorageType: "expo-secure-storage",
	clientStorage: SecureStore,
})

export default App = () => {
  return (
    <NhostProvider nhost={nhost}>
      <Navigation/>
      <StatusBar style="auto" />
    </NhostProvider>
  );
}
