import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";

class MyClassPage extends React.Component {
  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Type something"
          onChangeText={(text) => this.props.changeText(text)}
        />
      </View>
    );
  }
}

class Task23 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.text}>
          {this.state.text}
        </Text>
        <MyClassPage
          changeText={(text) => this.setState({text: text})}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    width: 200,
    padding: 10,
  },
});

export default Task23;