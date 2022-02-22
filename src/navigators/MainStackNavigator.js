import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MovieListScreen } from '../screens';

const MainStack = createNativeStackNavigator();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={'MovieList'}
        component={MovieListScreen}
        options={{
          title: 'Movie List',
        }}
      />
    </MainStack.Navigator>
  );
}