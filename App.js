import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './src/Navigation/BottomTabNav';
import { Provider } from 'react-redux'
import { store } from './src/Redux/Store';


export default function App() {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNav></BottomTabNav> 
      </NavigationContainer>
    </Provider>
  )
}



// *********************RUN ON WEB*************
//npx expo install react-dom react-native-web @expo/webpack-config
//npm run web



