import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNav from './StackNav'
import Completed from '../Screens/Completed';
import Inprogress from '../Screens/Inprogress';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



function BottomTabNav() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={StackNav} options={{
        tabBarIcon:()=> <Entypo name="home" size={26} color="darkblue"/>
      }}/>
      <Tab.Screen name="Completed" component={Completed} options={{
          tabBarIcon: () => <FontAwesome5 name="check" size={26} color="darkblue" />
        }}/>
        <Tab.Screen name="Inprogress" component={Inprogress} options={{
          tabBarIcon: () => <Entypo name="hour-glass" size={26} color="darkblue" />
        }}/>
    </Tab.Navigator>
  )
}

export default BottomTabNav
