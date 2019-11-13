import CameraScreen from '@src/screens/camera/Camera';
import HomeScreen from '@src/screens/home/Home';
import AlertScreen from '@src/screens/modals/Alert';
import BusyScreen from '@src/screens/modals/Busy';
import SettingScreen from '@src/screens/setting/Setting';
import { ComponentType } from 'react';

// 各画面のID
export enum ScreenIds {
  HOME = 'HOME_SCREEN',
  BUSY = 'BUSY_SCREEN',
  SETTING = 'SETTING_SCREEN',
  CAMERA = 'CAMERA_SCREEN',
  ALERT = 'ALERT_SCREEN',
}

// 画面IDと、画面コンポーネントのマップ
export const Screens = new Map<string, ComponentType<any>>();
Screens.set(ScreenIds.HOME, HomeScreen);
Screens.set(ScreenIds.SETTING, SettingScreen);
Screens.set(ScreenIds.BUSY, BusyScreen);
Screens.set(ScreenIds.CAMERA, CameraScreen);
Screens.set(ScreenIds.ALERT, AlertScreen);
