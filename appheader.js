import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.text}>Buzz App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FEBEBC',
    marginTop: 50
  },
  text:{
    color: 'black',
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: 'calibri',
    textAlign: "center" 
  }
})

export default AppHeader