import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { autobind } from 'core-decorators';

export default class Alert extends Component {
  @autobind
  hideAlert() {
    console.log('here');
  }

  render() {
    return <View style={styles.container}></View>;
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
});
