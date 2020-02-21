import { NavigationContainer } from '@react-navigation/native';
import Screens from '@src/screens';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
