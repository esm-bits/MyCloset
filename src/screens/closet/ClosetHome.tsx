/**
 * カテゴリー一覧画面
 */

import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';

import MCButton from '../../components/MCButton';
import Screen from '../../components/MCScreen';

function CategoryList() {
  const categoryList = useSelector<Store, Category[]>(
    state => state.userContents.categoryList,
  );
  const renderItem = (info: ListRenderItemInfo<Category>) => {
    return <ListItem key={info.item.id} title={info.item.name} />;
  };
  return <FlatList data={categoryList} renderItem={renderItem} />;
}

export default function ClosetHome(props: { navigation: NavigationProp<any> }) {
  return (
    <Screen>
      <MCButton
        title="カテゴリー追加"
        onPress={async () => {
          console.log('here');
          await new Promise(resolve => setTimeout(resolve, 3000));
        }}
      />
      <CategoryList />
    </Screen>
  );
}

const styles = StyleSheet.create({
  categoryList: {
    flex: 1,
  },
});
