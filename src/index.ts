import { Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { ScreenIds, Screens } from '@src/screens';

// OSのフォントスケーリングは無効化する //
// @ts-ignore
Text.defaultProps = Text.defaultProps || {};
// @ts-ignore
Text.defaultProps.allowFontScaling = false;

// 画面を全部登録する
Screens.forEach((component, screenId) => {
  Navigation.registerComponent(screenId, () => component);
});

// 起動時に呼び出されるコールバック
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: ScreenIds.HOME,
      },
    },
  });
});
