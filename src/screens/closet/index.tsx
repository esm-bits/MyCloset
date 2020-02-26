import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ClosetHome from './ClosetHome';

const Stack = createStackNavigator();

export default function Closet() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ClosetHome} />
    </Stack.Navigator>
  );
}
