import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import AddCategory from './AddCategory';
import Category from './Category';
import Home from './Home';

const Stack = createStackNavigator();

export default function Closet() {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitle: '戻る' }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'あなたのクローゼット' }}
      />
      <Stack.Screen
        name="AddCategory"
        component={AddCategory}
        options={{ title: 'カテゴリーを追加する' }}
      />
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
}
