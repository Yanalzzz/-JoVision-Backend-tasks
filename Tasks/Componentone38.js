import React from 'react';
import {Text} from 'react-native';
import TextContext from './TextContext';

class Componentone38 extends React.Component {

  static contextType = TextContext;

  render() {
    return (
      <Text>
        {this.context.text}
      </Text>
    );
  }
}

export default Componentone38;