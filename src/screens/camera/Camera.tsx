import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { autobind } from 'core-decorators';
import UI from '@src/stores/UI';
import DressList from '@src/stores/DressList';

type Props = {
  componentId: string;
};

export default class Camera extends Component<Props> {
  static options() {
    return {
      topBar: {
        title: {
          text: '服を撮影する',
        },
      },
    };
  }

  private cameraRef = React.createRef<RNCamera>();

  @autobind
  async takePicture() {
    if (this.cameraRef.current) {
      await UI.setBusy(true);
      const options = { quality: 0.5 };
      const data = await this.cameraRef.current.takePictureAsync(options);
      DressList.addDressFromPhoto({
        tag: data.uri,
        height: data.height,
        width: data.width,
      });
      console.log({ photoUrl: data.uri, data });
      await UI.setBusy(false);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={this.cameraRef}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'カメラの許可',
            message: '服の写真を撮影するために、端末のカメラを使用します。',
            buttonPositive: 'OK',
            buttonNegative: 'キャンセル',
          }}
        />
        <View
          style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}>
            <Text style={{ fontSize: 14 }}> 撮影する </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
