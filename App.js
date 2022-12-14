import { StatusBar } from 'expo-status-bar';
import Hot from './src/screens/hot';
import Top from './src/screens/top';
import Popular from './src/screens/popular';
import Home from './src/screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ControlProvider } from './src/context/controlContexts';
import Menu from './src/componets/menu';
import Web from './src/componets/webView';
const Stack = createNativeStackNavigator();

const App =()=> {

  return (
    <ControlProvider>
    	
    <NavigationContainer >
	
        <Stack.Navigator
          initialRouteName='News'
          screenOptions={{
            headerShown: false,
            cardStyle:{
              backgroundColor: '#0010a1',
		
             
          },
	
        }}
        >
          <Stack.Screen name="News" component={Home} />
          <Stack.Screen name='Top' component={Top} />
          <Stack.Screen name='Popular' component={Popular} />
          <Stack.Screen name='Hot' component={Hot} />
    	  <Stack.Screen name='webview' component={ Web} />	
    	</Stack.Navigator>

	<Menu />	
      </NavigationContainer>
    
    </ControlProvider>
  );
}

export default App;
