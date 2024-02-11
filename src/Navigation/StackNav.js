import React from 'react' 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../Screens/Details';
import Home from '../Screens/Home'



export default function StackNav() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}

 
