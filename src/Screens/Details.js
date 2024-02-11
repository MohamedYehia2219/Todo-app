import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

export default function Details({route}) {
  let todo= route.params;
  console.log(todo);
  return (
    <View style={styles.details}>
      <Text style={styles.detailsText}>Title: {todo.title}</Text>
      <Text style={styles.detailsText}>Description: {todo.description}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  details:{
    width:"50%",
    margin:"auto",    
    padding:"25px",
    borderWidth: 2,
    borderColor:"black",
    borderRadius:5,
    backgroundColor:"#5392e6"
  },
  detailsText:{
    fontSize:16,
    color:"white",
    flexWrap:"wrap",
  },
})
