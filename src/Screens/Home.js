import React from 'react'
import Todoform from '../Components/Todoform'
import Todos from '../Components/Todos'
import { SafeAreaView } from 'react-native-safe-area-context';

function Home() {
  return (
    <SafeAreaView>
        <Todoform></Todoform>
        <Todos></Todos>
    </SafeAreaView>
  )
}

export default Home
