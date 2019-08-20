import { Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { name as appName } from '../app.json';
import App from './App';

// OSのフォントスケーリングは無効化する //
// @ts-ignore
Text.defaultProps = Text.defaultProps || {};
// @ts-ignore
Text.defaultProps.allowFontScaling = false;

Navigation.registerComponent(appName, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: appName,
      },
    },
  });
});
