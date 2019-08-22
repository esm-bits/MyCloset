import { ComponentType } from 'react';
import Home from '@src/screens/home/Home';
import Busy from '@src/screens/modals/Busy';
import Setting from '@src/screens/setting/Setting';

// 各画面のID
export enum ScreenIds {
  HOME = 'HOME_SCREEN',
  Busy = 'BUSY_SCREEN',
  SETTING = 'SETTING_SCREEN',
}

// 画面IDと、画面コンポーネントのマップ
export const Screens = new Map<string, ComponentType>();
Screens.set(ScreenIds.HOME, Home);
Screens.set(ScreenIds.SETTING, Setting);
Screens.set(ScreenIds.Busy, Busy);
