import React, { Component } from "react";
import { WebView } from "react-native";

export default class webView extends Component {
  static navigationOptions = {
    headerTitle: "CricTalent"
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <WebView
        style={{ flex: 1 }}
        source={{
          uri:
            "http://www.crictalent.in/Play/AppLogin.aspx?abd=" +
            this.props.navigation.getParam("data", "Nothing")
        }}
      />
    );
  }
}
