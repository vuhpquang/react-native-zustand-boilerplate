import { Box, Checkbox, CheckIcon, CloseIcon, HStack, IconButton, InfoIcon, Input, Text } from 'native-base';
import React, { useState } from 'react';

const TodoItem = ({
  data = {
    id: 0,
    name: '',
    isDone: false,
    date: new Date(),
  },
  setIsDoneItem = () => { },
  deleteItem = () => { },
  editItem = () => { },
}) => {
  const [inputValue, setInputValue] = useState(data.name);
  const [isEdit, setIsEdit] = useState(false);

  const doneEditing = () => {
    editItem({
      id: data.id,
      name: inputValue,
    });
    setIsEdit(false);
  };

  const onChangeCheckbox = () => {
    setIsDoneItem(data.id);
  }

  return (
    <Box
      my={3}
      py={1}
    >
      <HStack
        alignItems="center"
      >
        <Checkbox
          colorScheme='success'
          isChecked={data.isDone}
          onChange={onChangeCheckbox}
          accessibilityLabel="Check is Done"
          mr={2}
        />
        {isEdit ? (
          <Input flex={1} backgroundColor="gray.100" fontSize="xl" onChangeText={v => setInputValue(v)} value={inputValue} placeholder="Edit Task" />
        ) : (
          <Text flex={1} fontSize="xl">{data.name}</Text>
        )}
        {isEdit ? (
          <IconButton mx={1} colorScheme="success" borderRadius="sm" variant="solid" icon={<CheckIcon size={15} color="warmGray.50" />} onPress={doneEditing} />
        ) : (
          <IconButton mx={1} colorScheme="info" borderRadius="sm" variant="solid" icon={<InfoIcon size={15} color="warmGray.50" />} onPress={() => setIsEdit(!isEdit)} />
        )}
        <IconButton mx={1} colorScheme="danger" borderRadius="sm" variant="solid" icon={<CloseIcon size={15} color="warmGray.50" />} onPress={() => {
          if (isEdit) {
            setIsEdit(false);
            setInputValue(data.name);
          } else {
            deleteItem(data.id);
          }
        }} />
      </HStack>
    </Box>
  )
}

export default TodoItem;