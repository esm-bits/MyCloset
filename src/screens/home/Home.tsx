/**
 * ホーム画面
 */

import theme from '@src/components/themes';
import { ScreenIds } from '@src/screens';
import CategoryList from '@src/stores/CategoryList';
import { CategoryType } from '@src/stores/models/Category';
import UI from '@src/stores/UI';
import { autobind } from 'core-decorators';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
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

  @autobind
  renderCategoryListItem({ item }: { item: CategoryType }) {
    return (
      <View>
        <Text>{JSON.stringify(item)}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView>
        <ThemeProvider theme={theme}>
          <FlatList
            data={CategoryList.categoryList}
            renderItem={this.renderCategoryListItem}
            keyExtractor={item => '' + item.id}
          />
        </ThemeProvider>
      </SafeAreaView>
    );
  }
}
