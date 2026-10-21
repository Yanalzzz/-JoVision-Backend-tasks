import React , {useEffect, useState} from "react";
import {View, Text, Button,StyleSheet} from "react-native";



 

const  MyFunctionPage  = () =>{
  
     useEffect(() => {
    console.log("MyFunctionPage loaded");
  

  return () =>{
    console.log("MyFunctionPage hidden");
  };
     

},[]);
  
    return (
      <View>
        <Text>This is  MyFunctionPage</Text>
      </View>
    );
  }


  const Task21 = () => {

  const [content, setContent] = useState(false);

 
    
         return (
             <View style={styles.container}>

      <Button title="Show"  onPress={() => setContent(!content)}
      />

      {content ? <MyFunctionPage /> : null}

    </View>
  );
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Task21;
  