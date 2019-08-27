/**
 * ホーム画面
 */

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import UI from '@src/stores/UI';
import { autobind } from 'core-decorators';
import { ScreenIds } from '@src/screens';
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

  async componentDidMount() {
    await UI.setBusy(true);
    setTimeout(async () => {
      await UI.setBusy(false);
    }, 3000);
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Home</Text>
          <Button title="Camera" onPress={this.onPressCameraButton} />
        </View>
      </SafeAreaView>
    );
  }
}
