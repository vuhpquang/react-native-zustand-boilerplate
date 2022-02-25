// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackNavigator } from './src/navigators/MainStackNavigator';
import { extendTheme, NativeBaseProvider } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};
const theme = extendTheme({ colors: newColorTheme });

const config = {
  dependencies: {
    // For Expo projects (Bare or managed workflow)
    // 'linear-gradient': require('expo-linear-gradient').LinearGradient,
    // For non expo projects
    'linear-gradient': require('react-native-linear-gradient').default,
  },
  strictMode: 'warn',
};

const RootStack = createNativeStackNavigator();

function App() {
  const colorModeManager = {
    get: async () => {
      try {
        let val = await AsyncStorage.getItem('@my-app-color-mode');
        return val === 'dark' ? 'dark' : 'light';
      } catch (e) {
        console.log(e);
        return 'light';
      }
    },
    set: async (value) => {
      try {
        await AsyncStorage.setItem('@my-app-color-mode', value);
      } catch (e) {
        console.log(e);
      }
    },
  };

  function renderScreens() {
    // if (loading) {
    //   return <RootStack.Screen name={'Splash'} component={SplashScreen} />;
    // }
    // return user ? (
    //   <RootStack.Screen name={'MainStack'} component={MainStackNavigator} />
    // ) : (
    //   <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
    // );
    return (<RootStack.Screen name="MainStack" component={MainStackNavigator} />);
  }

  return (
    <NativeBaseProvider
      theme={theme}
      colorModeManager={colorModeManager}
      config={config}
    >
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          {renderScreens()}
        </RootStack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;