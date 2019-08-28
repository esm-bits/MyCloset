import { Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { ScreenIds, Screens } from '@src/screens';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import UI from '@src/stores/UI';

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
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
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
