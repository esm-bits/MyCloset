/**
 * アプリ
 */

import React, { Component } from "react";
import {
  createAppContainer,
  createStackNavigator,
  SafeAreaView,
} from "react-navigation";

import Home from "@src/screens/home/Home";
import Modals from "@src/screens/modals";
import { observer } from "mobx-react";
import UI from "@src/stores/UI";
import Busy from "@src/components/Busy";

const RootNavigator = createStackNavigator(
  {
    Home,
  },
  {
    initialRouteKey: "Home",
    headerMode: "float",
  }
);

const AppNavigator = createStackNavigator(
  {
    Root: RootNavigator,
    ...Modals,
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);

const AppContainer = createAppContainer(AppNavigator);

@observer
export default class App extends Component {
  render() {
    return (
      <>
        <AppContainer />
        <SafeAreaView />
        {UI.isBusy ? <Busy /> : null}
      </>
    );
  }
}
