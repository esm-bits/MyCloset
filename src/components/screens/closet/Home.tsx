/**
 * カテゴリー一覧画面
 */

import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';

import MCButton from '../../common/MCButton';
import Screen from '../../common/MCScreen';

function CategoryList() {
  const categoryList = useSelector<Store, Category[]>(
    state => state.userContents.categoryList,
  );
  const renderItem = (info: ListRenderItemInfo<Category>) => {
    return <ListItem key={info.item.id} title={info.item.name} />;
  };
  return <FlatList data={categoryList} renderItem={renderItem} />;
}

export default function Home(props: { navigation: StackNavigationProp<any> }) {
  return (
    <Screen>
      <MCButton
        title="カテゴリー追加"
        onPress={() => {
          props.navigation.push('AddCategory');
        }}
      />
      <CategoryList />
    </Screen>
  );
}
