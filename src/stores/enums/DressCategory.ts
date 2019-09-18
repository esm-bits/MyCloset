import { types } from 'mobx-state-tree';

export const DressCategoryValue = {
  未分類: 'unknown',
  上着: 'uwagi',
  ボトムス: 'bottoms',
};

export default types.enumeration(
  'DressCategory',
  Object.keys(DressCategoryValue),
);
