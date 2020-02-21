import { createStackNavigator } from '@react-navigation/stack';
import CameraScreen from '@src/screens/camera/Camera';
import HomeScreen from '@src/screens/home/Home';
import SettingScreen from '@src/screens/setting/Setting';
import React from 'react';

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
