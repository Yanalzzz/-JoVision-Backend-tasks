import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class Task16 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      content: false
    };
  }

  toggleName = () => {
    this.setState({
      content: !this.state.content
    });
  };

  render() {
    return (
      <View style={styles.container}>

        <Button
          title="Show"
          onPress={this.toggleName}
        />

        {this.state.content ? <Text style={styles.text}>Yanal</Text> : null}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 20,
    marginTop: 10
  }
});

export default Task16;