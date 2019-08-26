import { ComponentType } from 'react';
import HomeScreen from '@src/screens/home/Home';
import BusyScreen from '@src/screens/modals/Busy';
import SettingScreen from '@src/screens/setting/Setting';

// 各画面のID
export enum ScreenIds {
  HOME = 'HOME_SCREEN',
  Busy = 'BUSY_SCREEN',
  SETTING = 'SETTING_SCREEN',
}

// 画面IDと、画面コンポーネントのマップ
export const Screens = new Map<string, ComponentType>();
Screens.set(ScreenIds.HOME, HomeScreen);
Screens.set(ScreenIds.SETTING, SettingScreen);
Screens.set(ScreenIds.Busy, BusyScreen);
