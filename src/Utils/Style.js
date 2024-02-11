import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    form: {
      backgroundColor:'#5392e6',
      alignItems: 'center',
      width:'98%',
      padding:"10px",
      margin:"10px",
      borderRadius:10
    },
    title:{
      fontWeight:'bold',
      color:'white',
      margin:'15px'
    },
    input:{
      width:"100%",
      margin:"10px",
      padding:"10px",
      borderWidth: 1,
      borderColor:"white",
      borderRadius:5
    },
    btn:{
      margin:"10px",
      padding:"10px",
      width:"20%",
      backgroundColor:"darkblue",
      justifyContent:"center",
      alignItems:"center", 
      borderRadius:10,
    },
    textBtn:{
      fontWeight:'bold',
      color:'white',
    },
    //**************** */
    card:{
        width:'98%',
        margin:'10px',
        padding:"7px",
        borderWidth:"1px",
        borderColor:"darkblue",
        borderRadius:10,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#4287f5"
    },
    todo:{
        flex:1,
     },
    todoText:{
        color:"white"
    },
    icons:{
        margin:"3px",
        padding:"3px"
    },
  });