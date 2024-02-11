import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './src/Navigation/BottomTabNav';
import { Provider } from 'react-redux'
import { store } from './src/Redux/Store';
import { useWindowDimensions } from 'react-native';
import { useEffect } from 'react';

export default function App() {
  const {width , height} =useWindowDimensions();
  useEffect(()=>{
    if(width>height)
      {
        console.log("Landscape");
      }
  },[width,height])
 
  return(
    <>
      <Provider store={store}>
        <NavigationContainer>
          <BottomTabNav></BottomTabNav> 
        </NavigationContainer>
      </Provider>
    </>
  )
}

// *********************RUN ON WEB*************
//npx expo install react-dom react-native-web @expo/webpack-config
//npm run web



