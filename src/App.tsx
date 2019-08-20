/**
 * アプリ
 */

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import UI from '@src/stores/UI';
import Busy from '@src/components/Busy';
import { Text, SafeAreaView } from 'react-native';

@observer
export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Hello</Text>
        {UI.isBusy ? <Busy /> : null}
      </SafeAreaView>
    );
  }
}
