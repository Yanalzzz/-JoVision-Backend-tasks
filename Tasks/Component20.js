import React from "react";
import {View, Text, Button,StyleSheet} from "react-native";



 

class MyClassPage extends React.Component {
  
     componentDidMount() {
    console.log("MyClassPage loaded");
    }
    render() {
    return (
      <View>
        <Text>This is MyClassPage</Text>
      </View>
    );
  }
}

   class Component20 extends React.Component{
 
   constructor(props) {
        super(props);
        this.state = {
            content: false
        };
    }
 
    render () {
        return (
          <View style={styles.container}>
<Button  title="Show" onPress={() => this.setState({content: true})}
/>

{this.state.content ? <MyClassPage /> : null}
          </View>
        )
    }

  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Component20;
