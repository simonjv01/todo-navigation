
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import MyStack from './routes/MyStack';


export default function App() {
  return (
    <NavigationContainer >
      <MyStack />
      
    </NavigationContainer>
  );
}


