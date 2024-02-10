import React, { useEffect,useState } from 'react'
import {Text,StyleSheet,TouchableOpacity,FlatList } from 'react-native'
import { View } from 'react-native';

export default function Completed({route}) {
  console.log(route.params);
  let [completedTasks, setcompletedTasks]=useState(route.params);
  console.log(completedTasks);

  return completedTasks?(
    <FlatList
        data={completedTasks}
        renderItem={({item})=>(
        <TouchableOpacity style={styles.card} >
              <Text style={styles.text}>Title: {item.title}</Text>
              <Text style={styles.text}>Description: {item.description}</Text>
          </TouchableOpacity>
          )}
        // keyExtractor={item=>item.id}
      />
  ) : (
    <View>
        <Text style={styles.text}>No completed Tasks Yet!</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  card:{
    width:'90vw',
    margin:'5px',
    padding:"5px",
    borderWidth:"1px",
    borderColor:"darkblue",
    borderStyle:"solid",
  },
  text:{
    color:'black',
    fontWeight:"bold"
  },
})
  