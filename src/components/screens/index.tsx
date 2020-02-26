import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import CameraScreen from './camera/Camera';
import Closet from './closet';
import SettingScreen from './setting/Setting';

const Tab = createBottomTabNavigator();

export default function Screens() {
  return (
    <>
      <Tab.Navigator initialRouteName="Closet">
        <Tab.Screen name="Closet" component={Closet} />
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </>
  );
}
