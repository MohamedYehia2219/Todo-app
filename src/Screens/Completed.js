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
  todos:{
    width:"98%",
    padding:"10px",
    borderWidth: 2,
    borderColor:"black",
    borderRadius:5,
    backgroundColor:"#5392e6",
    margin:10,
  },
  todosText:{
    fontSize:16,
    color:"white",
    flexWrap:"wrap",
  },
})
  