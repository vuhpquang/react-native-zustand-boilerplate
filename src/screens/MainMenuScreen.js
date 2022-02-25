import React from 'react'
import { Box, Button, Center, Flex, Text, useColorMode, useColorModeValue, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const MainMenuScreen = () => {
  const navigation = useNavigation();
  const {
    toggleColorMode
  } = useColorMode();

  const goToTodo = () => {
    navigation.navigate('TodoList');
  };

  const goToMovie = () => {
    navigation.navigate('MovieList');
  };

  return (
    <Box
      p="4"
      flex="1"
      bg={useColorModeValue("warmGray.50", "coolGray.800")}
    >
      <Text fontSize="lg" display="flex" mb={20}>
        The active color mode is{" "}
        <Text bold fontSize="18px">
          {useColorModeValue("Light", "Dark")}
        </Text>
      </Text>
      <Flex h="50%" align="center" justify="space-around">
        <Button onPress={toggleColorMode} w="50%">Toggle Theme</Button>
        <Button onPress={goToTodo} w="50%">Todo List</Button>
        <Button onPress={goToMovie} w="50%">Movie List</Button>
      </Flex>
    </Box>
  );
}

export default MainMenuScreen;