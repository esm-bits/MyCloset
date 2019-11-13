import UI from '@src/stores/UI';
import { autobind } from 'core-decorators';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';

export type PassProps = {
  title: string;
  message: string;
};

type Props = {
  componentId: string;
} & PassProps;

export default class Alert extends Component<Props> {
  @autobind
  async hideAlert() {
    await UI.hideAlert(this.props.componentId);
  }

  render() {
    return (
      <View style={styles.container}>
        <Card title={this.props.title}>
          <Text style={styles.message}>{this.props.message}</Text>
          <Button title="閉じる" onPress={this.hideAlert} />
        </Card>
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
    backgroundColor: 'black',
    opacity: 0.8,
  },
  dialog: {
    backgroundColor: 'white',
  },
  message: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
});
