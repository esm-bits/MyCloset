/**
 * ホーム画面
 */

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { SafeAreaView, View } from 'react-native';
import UI from '@src/stores/UI';
import { autobind } from 'core-decorators';
import { ScreenIds } from '@src/screens';
import { Navigation } from 'react-native-navigation';
import { Button, Text, ThemeProvider } from 'react-native-elements';
import theme from '@src/components/themes';

type Props = {
  componentId: string;
};

@observer
export default class Home extends Component<Props> {
  static options() {
    return {
      topBar: {
        title: {
          text: '服一覧',
        },
      },
    };
  }

  @autobind
  async onPressCameraButton() {
    await Navigation.push(this.props.componentId, {
      component: {
        name: ScreenIds.CAMERA,
        passProps: {},
        options: {
          topBar: {
            backButton: {
              title: '戻る',
            },
          },
        },
      },
    });
  }

  @autobind
  onPressRestartButton() {
    UI.restartApp();
  }

  @autobind
  async onPressAlertButton() {
    await UI.showAlert({
      title: 'テストアラート',
      message: 'テストアラートメッセージ',
    });
  }

  async componentDidMount() {
  }

  render() {
    return (
      <SafeAreaView>
        <ThemeProvider theme={theme}>
          <View>
            <Text>Home</Text>
            <Button title="Camera" onPress={this.onPressCameraButton} />
            <Button title="Restart" onPress={this.onPressRestartButton} />
            <Button title="Alert" onPress={this.onPressAlertButton} />
          </View>
        </ThemeProvider>
      </SafeAreaView>
    );
  }
}
