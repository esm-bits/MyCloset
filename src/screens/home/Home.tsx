/**
 * ホーム画面
 */

import React, { Component } from "react";
import { observer } from "mobx-react";
import { Text, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import UI from "@src/stores/UI";
import HeaderTitle from "@src/components/HeaderTitle";

type Props = {
  navigation: NavigationScreenProp<any, any>;
};

@observer
export default class Home extends Component<Props> {
  static navigationOptions = {
    headerTitle: <HeaderTitle label={"MyCloset"} />,
    headerRight: <HeaderTitle label={"test"} />,
  };

  componentDidMount(): void {
    UI.setBusy(true);
    setTimeout(() => {
      UI.setBusy(false);
    }, 3000);
  }

  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}
