import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useStore } from '../../store/todoStore';
import { AddIcon, Box, Center, FlatList, Heading, HStack, Icon, IconButton, Input, useColorModeValue, VStack } from 'native-base';
import TodoItem from './TodoItem';

const TodoListScreen = () => {
  const todoList = useStore(state => state.todoList);
  const addTodo = useStore(state => state.addTodo);
  const setNameTodo = useStore(state => state.setNameTodo);
  const setDoneTodo = useStore(state => state.setDoneTodo);
  const removeTodo = useStore(state => state.removeTodo);
  console.log(todoList);

  const [inputValue, setInputValue] = useState("");

  const onAddTodo = () => {
    addTodo(inputValue);
  };

  const renderItem = ({ item }) => {
    console.log('renderItem', item);
    return (
      <TodoItem
        data={item}
        setIsDoneItem={setDoneTodo}
        deleteItem={removeTodo}
        editItem={setNameTodo}
      />
    );
  };
  return (
    <Box
      w="100%"
      h="100%"
      bg={useColorModeValue("warmGray.50", "coolGray.800")}>
      <Center>
        <Box w="80%">
          <Center>
            <Heading size="md" my={2}>To-do List</Heading>
          </Center>
          <VStack space={4}>
            <HStack>
              <Input flex={1} onChangeText={v => setInputValue(v)} value={inputValue} placeholder="Add Task" />
              <IconButton mx={2} colorScheme="success" borderRadius="sm" variant="solid" icon={<AddIcon size="sm" color="warmGray.50" />} onPress={onAddTodo} />
            </HStack>
          </VStack>
          <FlatList
            data={todoList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </Box>
      </Center>
    </Box>
  )
}

export default TodoListScreen;