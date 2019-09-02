/**
 * グローバルなユーザーインターフェースに関する状態を保持するストア
 */

import { flow, types } from 'mobx-state-tree';
import { Navigation } from 'react-native-navigation';
import { ScreenIds } from '@src/screens';
import UUID from '@src/helpers/UUID';
import RNRestart from 'react-native-restart';
import { PassProps as AlertScreenProps } from '@src/screens/modals/Alert';

export const UIStore = types
  .model('UI', {
    currentScreenId: types.maybe(types.string),
    isBusy: types.boolean,
    busyOverlayComponentId: types.maybe(types.string),
  })
  .actions(self => ({
    /**
     * ビジー状態を示すコンポーネントを表示する
     * @param isBusy
     */
    setBusy: flow(function*(isBusy: boolean) {
      if (isBusy) {
        self.busyOverlayComponentId = `BusyOverlayComponent_${UUID()}`;
        yield Navigation.showOverlay({
          component: {
            id: self.busyOverlayComponentId,
            name: ScreenIds.BUSY,
            options: {
              overlay: {
                interceptTouchOutside: true,
              },
            },
          },
        });
      } else {
        self.busyOverlayComponentId &&
          (yield Navigation.dismissOverlay(self.busyOverlayComponentId));
      }
      self.isBusy = isBusy;
    }),
    /**
     * Alertを表示する
     */
    showAlert: flow(function*(props: AlertScreenProps) {
      yield Navigation.showOverlay({
        component: {
          name: ScreenIds.ALERT,
          options: {
            overlay: {
              interceptTouchOutside: true,
            },
          },
          passProps: props,
        },
      });
    }),
    /**
     * Alertを消す
     */
    hideAlert: flow(function*(componentId: string) {
      yield Navigation.dismissModal(componentId);
    }),
    /**
     * アプリのReactNativeの部分を再起動させる
     */
    restartApp() {
      RNRestart.Restart();
    },
    /**
     * js例外を処理する
     */
    handleJsException(error: Error, isFatal: boolean) {
      console.log({ jsException: { error, isFatal } });
    },
    /**
     * ネイティブ例外を処理する
     */
    handleNativeException(exceptionMsg: string) {
      console.log({ nativeException: { exceptionMsg } });
    },
  }));

const store = UIStore.create({ isBusy: false });

export default store;
