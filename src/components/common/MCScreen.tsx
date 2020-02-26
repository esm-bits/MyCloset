import React from 'react';
import { Text, View } from 'react-native';
import { Overlay } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

export default function MCScreen(props: { children: React.ReactElement[] }) {
  const isBusy = useSelector<Store, boolean>(state => state.ui.isBusy);
  return (
    <SafeAreaView>
      <View style={{ height: '100%' }}>
        {props.children}
        {isBusy && (
          <Overlay isVisible={isBusy}>
            <Text>isBusy</Text>
          </Overlay>
        )}
      </View>
    </SafeAreaView>
  );
}
