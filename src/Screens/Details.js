import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

export default function Details({route}) {
  let todo= route.params;
  console.log(todo);
  return (
    <View style={styles.details}>
      <Text>Title: {todo.title}</Text>
      <Text>Description: {todo.description}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  details:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center" 
  }
})
