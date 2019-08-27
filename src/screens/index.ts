import { ComponentType } from 'react';
import HomeScreen from '@src/screens/home/Home';
import BusyScreen from '@src/screens/modals/Busy';
import SettingScreen from '@src/screens/setting/Setting';
import CameraScreen from '@src/screens/camera/Camera';

// 各画面のID
export enum ScreenIds {
  HOME = 'HOME_SCREEN',
  BUSY = 'BUSY_SCREEN',
  SETTING = 'SETTING_SCREEN',
  CAMERA = 'CAMERA_SCREEN',
}

// 画面IDと、画面コンポーネントのマップ
export const Screens = new Map<string, ComponentType<any>>();
Screens.set(ScreenIds.HOME, HomeScreen);
Screens.set(ScreenIds.SETTING, SettingScreen);
Screens.set(ScreenIds.BUSY, BusyScreen);
Screens.set(ScreenIds.CAMERA, CameraScreen);
