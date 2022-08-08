import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Sample1 from './src/Screens/sample1.js';
import Sample2 from './src/Screens/sample2.js';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sample1" component={Sample1} />
        <Stack.Screen name="Sample2" component={Sample2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





