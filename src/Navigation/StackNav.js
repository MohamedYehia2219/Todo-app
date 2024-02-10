import React from 'react' 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from '../Screens/Todo';
import Details from '../Screens/Details';
import Completed from '../Screens/Completed'


export default function StackNav() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Todo" component={Todo} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Completed" component={Completed} />
    </Stack.Navigator>
  )
}

 
