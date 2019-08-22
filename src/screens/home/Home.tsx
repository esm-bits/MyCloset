/**
 * ホーム画面
 */

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Text, View } from 'react-native';
import UI from '@src/stores/UI';

type Props = {};

@observer
export default class Home extends Component<Props> {
  async componentDidMount() {
    await UI.setBusy(true);
    setTimeout(async () => {
      await UI.setBusy(false);
    }, 3000);
  }

  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}
