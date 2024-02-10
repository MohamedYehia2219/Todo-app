import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './src/Navigation/BottomTabNav';

export default function App() {
  return(
    <NavigationContainer>
      <BottomTabNav></BottomTabNav> 
    </NavigationContainer>
  )
  
}



// *********************RUN ON WEB*************
//npx expo install react-dom react-native-web @expo/webpack-config
//npm run web



