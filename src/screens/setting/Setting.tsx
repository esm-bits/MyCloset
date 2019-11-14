/**
 * 設定画面
 */

import theme from '@src/components/themes';
import { autobind } from 'core-decorators';
import React, { Component } from 'react';
import { Linking, SafeAreaView, ScrollView, Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { ListItem, ThemeProvider } from 'react-native-elements';

type Props = {};
type State = {
  name: string;
  version: string;
};

export default class Setting extends Component<Props, State> {
  static options() {
    return {
      topBar: {
        title: {
          text: 'このアプリについて',
        },
      },
    };
  }

  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      version: '',
    };
  }

  async componentDidMount() {
    const name = DeviceInfo.getApplicationName();
    const version = DeviceInfo.getVersion();
    this.setState({
      name,
      version,
    });
  }

  @autobind
  onPressSupport() {
    Linking.openURL('https://github.com/esm-bits/MyCloset');
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <ScrollView>
            <Text style={{ margin: 8, marginTop: 24, textAlign: 'center' }}>
              {this.state.name}
            </Text>
            <ListItem
              title="バージョン"
              rightTitle={this.state.version}
              topDivider
              bottomDivider
            />
            <ListItem
              title="お問い合わせ"
              bottomDivider
              chevron
              onPress={this.onPressSupport}
            />
          </ScrollView>
        </ThemeProvider>
      </SafeAreaView>
    );
  }
}
