import { types } from "mobx-state-tree";

export const DressCategory = {
  Uwagi: "",
};

export default types.enumeration("DressCategory", Object.keys(DressCategory));
