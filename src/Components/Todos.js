import React from 'react'
import { View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import Todo from './Todo'

function Todos() {
  const {todos} = useSelector((state)=>state.todo) //store reducre 
  return (
    <View>
      <FlatList style={{flex: 1}}
        data={todos}
        renderItem={({item,index})=>(
              <Todo item={item} index={index}></Todo>
          )}
        keyExtractor={item=>item.id}
        />
    </View>
  )
}

export default Todos
