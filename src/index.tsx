import { AppRegistry, Text } from 'react-native';

import { name as appName } from '../app.json';
import App from './App';

// OSのフォントスケーリングは無効化する //
// @ts-ignore
Text.defaultProps = Text.defaultProps || {};
// @ts-ignore
Text.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => App);
