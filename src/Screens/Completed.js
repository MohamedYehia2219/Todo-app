import React from 'react'
import { View,Text,StyleSheet ,FlatList } from 'react-native'
import { useSelector } from 'react-redux'

export default function Completed() {
  const {completed}=useSelector(state=>state.todo)

  return(
    <View>
      <FlatList style={{flex: 1}}
        data={completed}
        renderItem={({item})=>(
          <View style={styles.todos}>
            <Text style={styles.todosText}>Title: {item.title}</Text>
            <Text style={styles.todosText}>Description: {item.description}</Text>
          </View>
          )}
        keyExtractor={item=>item.id}
        />
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
  