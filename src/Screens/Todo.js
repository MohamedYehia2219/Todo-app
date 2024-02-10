import React from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList ,SafeAreaView,} from 'react-native';
import { TextInput } from 'react-native';


export default function Todo({navigation}) {
    let [id, setId]=useState(0);
    let [title, setTitle]=useState("");
    let [description, setDescription]=useState("");
    let [tasks, setTasks]=useState([]);
    let [completedTasks,setcompletedTasks]=useState([]);

    //check not repeated
    const check=(taskTitle)=>{
      for(let task of tasks)
      {
        if(task.title===taskTitle)
        {
          alert("Task is already exists!!..");
          return false;
        }
      }
      return true;
    }

      //add task
    const getTitle=(event)=>{setTitle(event)}
    const getDescription=(event)=>{setDescription(event)}
    const addTask=()=>{
        if(title && description && check(title))
        {
            setId(id+1);
            setTasks([...tasks,{id:id, title: title, description:description}]);
            setTitle("");
            setDescription("");
        }
      //console.log(tasks);
    }

       //navigate to details
    const gotoDetails=(item)=>{
        navigation.navigate("Details", item);
    }

    //completeTask
    const completeTask=(item)=>{
      setcompletedTasks([item,...completedTasks])
      console.log(completedTasks);
      navigation.navigate("Completed",completedTasks)
    }

    //deleteTask
    const deleteTask=(index)=>{
      let list=[...tasks];
      list.splice(index,1);
      setTasks(list);
    }

  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TODO APP</Text>
        <TextInput  style={styles.input} value={title} onChangeText={getTitle}/> 
        <TextInput style={styles.input} value={description} onChangeText={getDescription}/> 
        <TouchableOpacity style={styles.btn} onPress={addTask}>
          <Text style={styles.textBtn}>ADD</Text>
        </TouchableOpacity>
        <FlatList
        data={tasks}
        renderItem={({item,index})=>(
        <TouchableOpacity style={styles.card}>
                  <TouchableOpacity style={styles.cardLeft} onPress={()=>{gotoDetails(item)}}>
                    <Text style={styles.text}>Title: {item.title}</Text>
                    <Text style={styles.text}>Description: {item.description}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cardRight}>
                      <Text onPress={()=>{deleteTask(index)}}>❌</Text>
                      <Text style={styles.complete} onPress={()=>{completeTask(item)}}> ✔ </Text>
                  </TouchableOpacity>
          </TouchableOpacity>
          )}
        keyExtractor={item=>item.id}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      width:'100vw',
      height:'100vh',
      display:'flex',
      flexDirection:"column",
    },
    title:{
      fontWeight:'bold',
      color:'darkblue',
      margin:'10px'
    },
    input:{
      border:'1px solid black',
      width:"80vw",
      margin:"5px",
      padding:"5px",
    },
    btn:{
      margin:"15px",
      padding:"5px",
      width:"80vw",
      backgroundColor:"darkblue",
      justifyContent:"center",
     alignItems:"center" 
    },
    textBtn:{
      fontWeight:'bold',
      color:'white',
    },
    card:{
      width:'90vw',
      margin:'5px',
      padding:"5px",
      borderWidth:"1px",
      borderColor:"darkblue",
      borderStyle:"solid",
      display:"flex",
      flexDirection:"row"
    },
    text:{
      color:'black',
      fontWeight:"bold"
    },
    cardLeft:{
      flex:3,
    } ,
    cardRight:{
      felx:1,
      display:"flex",
      flexDirection:"row",
      padding:"10px",
      marginTop:"5px"
    },
    complete:{
      marginLeft:"10px",
    }
});
