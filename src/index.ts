import AsyncStorage from '@react-native-community/async-storage';
import { ScreenIds, Screens } from '@src/screens';
import DressList from '@src/stores/DressList';
import UI from '@src/stores/UI';
import { debounce } from 'lodash-es';
import { onSnapshot } from 'mobx-state-tree';
import { Text } from 'react-native';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import { Navigation } from 'react-native-navigation';

// OSのフォントスケーリングは無効化する //
// @ts-ignore
Text.defaultProps = Text.defaultProps || {};
// @ts-ignore
Text.defaultProps.allowFontScaling = false;

// 例外ハンドラの設定 //
setJSExceptionHandler(UI.handleJsException);
setNativeExceptionHandler(UI.handleNativeException, false);

// 画面を全部登録する
Screens.forEach((component, screenId) => {
  Navigation.registerComponent(screenId, () => component);
});

// 起動時に呼び出されるコールバック
Navigation.events().registerAppLaunchedListener(async () => {
  await DressList.hydrate();
  await Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: ScreenIds.HOME,
            },
          },
        ],
      },
    },
  });
});

// DressListに変更があるたびに永続化する
onSnapshot(
  DressList,
  debounce(
    (snapshot: any) =>
      AsyncStorage.setItem('DressList', JSON.stringify(snapshot)),
    1000,
  ),
);
