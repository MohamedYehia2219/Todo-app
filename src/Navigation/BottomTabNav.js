import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Completed from '../Screens/Completed';
import StackNav from './StackNav'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


function BottomTabNav() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={StackNav} options={{
        tabBarIcon:()=> <Entypo name="home" size={26} color="blue"/>
      }}/>
      <Tab.Screen name="Completed" component={Completed} options={{
          tabBarIcon: () => <FontAwesome5 name="check-double" size={26} color="blue" />
        }}/>
    </Tab.Navigator>
  )
}

export default BottomTabNav
