/**
 * グローバルなユーザーインターフェースに関する状態を保持するストア
 */

import { types, flow } from 'mobx-state-tree';
import { Navigation } from 'react-native-navigation';
import { ScreenIds } from '@src/screens';
import UUID from '@src/helpers/UUID';

const UI = types
  .model('UI', {
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
            name: ScreenIds.Busy,
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
  }))
  .create({
    isBusy: false,
  });

export default UI;
