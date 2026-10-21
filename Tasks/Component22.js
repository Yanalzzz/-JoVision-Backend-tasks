import React , {useEffect, useState} from "react";
import {View, Text, TextInput,StyleSheet} from "react-native";



 

const  MyFunctionPage  = () =>{
  
  


    return (

       
      <View>
<TextInput
        style={styles.input}
        placeholder="Type something"
        onChangeText={(text) => props.changeText(text)}
      />      </View>
    );
  }
  const Task22 = () => {

  const [text, setText] = useState("");

  return (
    <View style={styles.container}>

      <Text style={styles.text}>
        {text}
      </Text>

      <MyFunctionPage changeText={setText} />

    </View>
  );
};

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

export default Task22;