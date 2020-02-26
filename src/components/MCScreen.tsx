import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MCScreen(props: { children: React.ReactElement[] }) {
  return (
    <SafeAreaView>
      <View style={{ height: '100%' }}>{props.children}</View>
    </SafeAreaView>
  );
}
