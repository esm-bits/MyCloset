/**
 * ホーム画面
 */

import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home(props: { navigation: NavigationProp<any> }) {
  const onPressCameraButton = () => {
    props.navigation.navigate('Camera');
  };
  const onPressRestartButton = () => {};
  const onPressAlertButton = () => {};
  const onPressSettingButton = () => {
    props.navigation.navigate('Setting');
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <Button title="Camera" onPress={onPressCameraButton} />
        <Button title="Restart" onPress={onPressRestartButton} />
        <Button title="Alert" onPress={onPressAlertButton} />
        <Button title="Setting" onPress={onPressSettingButton} />
      </View>
    </SafeAreaView>
  );
}
