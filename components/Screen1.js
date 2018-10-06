import React from "react";
import { Button, View, Text } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

export default class Screen1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Screen 1</Text>
        <Button
          title="ONE"
          onPress={() => this.props.navigation.navigate("ONE")}
        />
        <Button
          title="TWO"
          onPress={() => this.props.navigation.navigate("TWO")}
        />
        <Button
          title="THREE"
          onPress={() => this.props.navigation.navigate("THREE")}
        />
      </View>
    );
  }
}
