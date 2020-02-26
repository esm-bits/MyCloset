/**
 * カテゴリー追加画面
 */

import React from 'react';
import { Input } from 'react-native-elements';

import MCButton from '../../common/MCButton';
import MCScreen from '../../common/MCScreen';
import useStoreDispatch from '../../hooks/useStoreDispatch';

export default function AddCategory() {
  const dispatch = useStoreDispatch();
  const onPress = async () => {
    dispatch({ type: 'ADD_CATEGORY', payload: { category: { name: 'hoge' } } });
  };
  return (
    <MCScreen>
      <Input placeholder="名前だよ" />
      <MCButton title="追加" onPress={onPress} />
    </MCScreen>
  );
}
