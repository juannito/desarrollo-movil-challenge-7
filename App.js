import React from "react";
import { Button, View, Text } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

class Screen1 extends React.Component {
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

class Screen2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Screen 2</Text>
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

class Screen3 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Screen 2</Text>
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

// const RootStack = createStackNavigator(
//   {
//     Home: Screen1,
//     Details: Screen2
//   },
//   {
//     initialRouteName: "Home"
//   }
// );

const BottomTab = createBottomTabNavigator(
  {
    ONE: Screen1,
    TWO: Screen2,
    THREE: Screen3
  },
  {
    initialRouteName: "TWO"
  }
);

export default class App extends React.Component {
  render() {
    return <BottomTab />;
  }
}
