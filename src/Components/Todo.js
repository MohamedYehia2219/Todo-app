import React from 'react'
import { Text, View,TouchableOpacity} from 'react-native';
import {FontAwesome5 } from '@expo/vector-icons';
import { styles } from '../Utils/Style';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { completeTask, deletaTodo } from '../Redux/Slice';

export default function Todo({item}) {
  const navigation = useNavigation();
  const dispatch=useDispatch();

   //navigate to details
  const gotoDetails=(item)=>{
  navigation.navigate("Details", item);
  }

  // add to completet
  const addToComplete=(item)=>{
    dispatch(completeTask(item));
  }

  //delete Todo
  const deleteTask=(item)=>{
    dispatch(deletaTodo(item));
  }
  
    return (
      <View style={styles.card}>
        <TouchableOpacity style={styles.todo} onPress={()=>{gotoDetails(item)}}>
            <Text style={styles.todoText}>Title: {item.title} </Text>
            <Text style={styles.todoText}>Description: <Text style={{...styles.todoText, fontSize:18}}>{item.description}</Text></Text>
        </TouchableOpacity>
        <Text style={styles.icons} onPress={()=>{addToComplete(item)}}>
            <FontAwesome5 name="check-circle" size={15} color="darkblue"/>
        </Text>
        <Text style={styles.icons} onPress={()=>{deleteTask(item)}}>
            <FontAwesome5 name="trash" size={15} color="darkblue"/>
        </Text>
      </View>
    );
}


