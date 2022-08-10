import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native'

// pages
import Main from "./screens/main";
import Splash from "./screens/splash";
import Hooks from "./screens/hooks";

const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="Main" component={Main} options={{headerLeft: () => (<View/>), headerShown: false}}/>
            <Stack.Screen name="Hooks" component={Hooks} options={{headerLeft: () => (<View/>), headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default App