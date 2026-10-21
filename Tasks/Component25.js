import React, {createRef} from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';


class MyClassPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  updateText = (value) => {
    this.setState({
      text: value
    });
  };

  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.state.text}
        </Text>
      </View>
    );
  }
}


class Task25 extends React.Component {

  constructor(props) {
    super(props);

    this.myRef = createRef();
  }

  handleTextChange = (value) => {
    if (this.myRef.current) {
      this.myRef.current.updateText(value);
    }
  };

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder="Type something"
          onChangeText={this.handleTextChange}
        />

        <MyClassPage ref={this.myRef} />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    borderWidth: 1,
    width: 220,
    padding: 10,
    marginBottom: 20,
  },

  text: {
    fontSize: 22,
  },
});

export default Task25;