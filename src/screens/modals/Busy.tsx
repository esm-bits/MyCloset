/**
 * ビジー状態表示用画面(UIストア経由で、Overlayとして表示させる)
 */

import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default class Busy extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color={styles.activityIndicator.color}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    opacity: 0.8,
  },
  activityIndicator: {
    color: '#5c5c5c',
  },
});
