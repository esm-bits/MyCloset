import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { autobind } from 'core-decorators';

export default class Alert extends Component {
  @autobind
  hideAlert() {
    console.log('here');
  }

  render() {
    return (
      <View style={styles.container}>
        <AwesomeAlert
          show={true}
          showProgress={false}
          title="AwesomeAlert"
          message="I have a message for you!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, delete it"
          confirmButtonColor="#DD6B55"
          onCancelPressed={this.hideAlert}
          onConfirmPressed={this.hideAlert}
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
});
