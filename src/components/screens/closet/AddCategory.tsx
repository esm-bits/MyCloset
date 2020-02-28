/**
 * カテゴリー追加画面
 */

import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'react-native-elements';

import MCButton from '../../common/MCButton';
import MCScreen from '../../common/MCScreen';
import useStoreDispatch from '../../hooks/useStoreDispatch';
import { ClosetStackParamList } from '../types';

export default function AddCategory(props: {
  navigation: StackNavigationProp<ClosetStackParamList, 'AddCategory'>;
}) {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useStoreDispatch();
  const onPress = handleSubmit(async data => {
    dispatch({
      type: 'ADD_CATEGORY',
      payload: { category: { name: data.categoryName } },
    });
    props.navigation.pop();
  });
  return (
    <MCScreen>
      <Input
        placeholder="名前だよ"
        ref={register({ required: true, name: 'categoryName' }) as any}
        onChangeText={text => setValue('categoryName', text, true)}
      />
      <MCButton title="追加" onPress={onPress} />
    </MCScreen>
  );
}
