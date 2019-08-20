import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
  label: string;
};

export default function HeaderTitle(props: Props) {
  return <Text style={styles.titleText}>{props.label}</Text>;
}

const styles = StyleSheet.create({
  titleText: {
    textAlign: 'center',
    fontSize: RFValue(30),
    fontWeight: 'bold',
  },
});
