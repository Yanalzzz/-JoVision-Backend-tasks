import React from 'react';
import {
  View,
  TextInput
} from 'react-native';

import {connect} from 'react-redux';
import {setText} from '../Store.js/textSlice';


class Component40 extends React.Component {

  render() {

    return (
      <View>
        <TextInput
          value={this.props.text}
          placeholder="Type something"

          onChangeText={(value) =>
            this.props.setText(value)
          }
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {

  return {
    text: state.text.value
  };

};


const mapDispatchToProps = {

  setText

};

export default connect(mapStateToProps,mapDispatchToProps)(Component40);