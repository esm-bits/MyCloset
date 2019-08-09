import { types } from "mobx-state-tree";

const UI = types
  .model("UI", {
    isBusy: types.boolean,
  })
  .actions(self => ({
    setBusy(isBusy: boolean) {
      self.isBusy = isBusy;
    },
  }))
  .create({
    isBusy: false,
  });

export default UI;
