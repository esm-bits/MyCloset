/**
 * ホーム画面
 */

import theme from '@src/components/themes';
import { ScreenIds } from '@src/screens';
import UI from '@src/stores/UI';
import { autobind } from 'core-decorators';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Text, ThemeProvider } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';

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
        rightButtons: [
          {
            id: 'showInfo',
            text: 'info',
          },
        ],
      },
    };
  }

  constructor(props: Props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  async navigationButtonPressed({ buttonId }: { buttonId: string }) {
    if (buttonId === 'showInfo') {
      await Navigation.push(this.props.componentId, {
        component: {
          name: ScreenIds.SETTING,
        },
      });
    }
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
    await UI.setBusy(true);
    setTimeout(async () => {
      await UI.setBusy(false);
    }, 3000);
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
