/**
 * アプリ
 */

import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { observer } from 'mobx-react';
import UI from '@src/stores/UI';
import Busy from '@src/components/Busy';
import { Text } from 'react-native';

@observer
export default class App extends Component {
  render() {
    return (
      <>
        <Text>Hello</Text>
        <SafeAreaView />
        {UI.isBusy ? <Busy /> : null}
      </>
    );
  }
}
