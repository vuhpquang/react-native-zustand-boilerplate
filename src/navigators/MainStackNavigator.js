import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainMenuScreen, MovieListScreen, TodoListScreen } from '../screens';
import { useColorModeValue } from 'native-base';

const MainStack = createNativeStackNavigator();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerTintColor: useColorModeValue('black', 'white'),
        headerStyle: {
          backgroundColor: useColorModeValue("white", "black"),
        },
      }}>
      <MainStack.Screen
        name={'MainMenu'}
        component={MainMenuScreen}
        options={{
          title: 'Main Menu',
        }}
      />
      <MainStack.Screen
        name={'TodoList'}
        component={TodoListScreen}
        options={{
          title: 'Todo List',
        }}
      />
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