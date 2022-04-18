import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { BookDetail } from "./screens/";
import Tabs from "./navigation/tabs";
import { useFonts } from 'expo-font';

import { 
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic 
} from '@expo-google-fonts/roboto'

import { 
  RobotoCondensed_300Light,
  RobotoCondensed_300Light_Italic,
  RobotoCondensed_400Regular,
  RobotoCondensed_400Regular_Italic,
  RobotoCondensed_700Bold,
  RobotoCondensed_700Bold_Italic 
} from '@expo-google-fonts/roboto-condensed'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createNativeStackNavigator();

const App = () => {

  const [loaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),

    'RobotoCondensed-Bold': require('./assets/fonts/RobotoCondensed-Bold.ttf'),
    'RobotoCondensed-Italic': require('./assets/fonts/RobotoCondensed-Italic.ttf'),
  });
  
  if (!loaded) {
    return null;
  }


    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Tabs'}
            >
                {/* Tabs */}
                <Stack.Screen name="Tabs" component={Tabs}   />

                {/* Screens */}
                <Stack.Screen name="BookDetails" component={BookDetail} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;