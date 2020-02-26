/**
 * 設定画面
 */

import React, { useEffect, useState } from 'react';
import { Linking, ScrollView, Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { ListItem } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Setting() {
  const onPressSupport = () => {
    Linking.openURL('https://github.com/esm-bits/MyCloset');
  };

  const [name, setName] = useState('');
  const [version, setVersion] = useState('');

  useEffect(() => {
    setName(DeviceInfo.getApplicationName());
    setVersion(DeviceInfo.getVersion());
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ margin: 8, marginTop: 24, textAlign: 'center' }}>
          {name}
        </Text>
        <ListItem
          title="バージョン"
          rightTitle={version}
          topDivider
          bottomDivider
        />
        <ListItem
          title="お問い合わせ"
          bottomDivider
          chevron
          onPress={onPressSupport}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
