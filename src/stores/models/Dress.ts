import { Instance, types } from "mobx-state-tree";

const Dress = types.model("Dress", {
  id: types.number,
});

export type DressType = Instance<typeof Dress>;

export default Dress;
