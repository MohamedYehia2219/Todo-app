import React, { useState } from 'react'
import { View,Text, TextInput,TouchableOpacity } from 'react-native'
import {styles} from '../Utils/Style'
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/Slice';

export default function Todoform() {
    let [title, setTitle]=useState("");
    let [description, setDescription]=useState("");
    const dispatch = useDispatch();

    const getTitle=(event)=>{setTitle(event)}
    const getDescription=(event)=>{setDescription(event)}
    
    //add todo
    const addTaskToStore=()=>{
      const obj = {id: Date.now(), title, description};
      dispatch(addTodo(obj));
      setTitle("");
      setDescription("");
    }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>TODO APP</Text>
      <TextInput  style={styles.input} value={title} onChangeText={getTitle} placeholder='Title'/> 
      <TextInput style={styles.input} value={description} onChangeText={getDescription} placeholder='Description'/> 
      <TouchableOpacity style={styles.btn} onPress={addTaskToStore}>
        <Text style={styles.textBtn}>ADD</Text>
      </TouchableOpacity>
    </View>
  )
}

