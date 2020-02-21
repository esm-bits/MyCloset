import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import CameraScreen from './camera/Camera';
import HomeScreen from './home/Home';
import SettingScreen from './setting/Setting';

const Stack = createStackNavigator();

export default function Screens() {
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </>
  );
}
