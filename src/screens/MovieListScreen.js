import { Box, Center, Text, useColorModeValue } from 'native-base';
import React from 'react';

const MovieListScreen = () => {
  return (
    <Box
      w="100%"
      h="100%"
      bg={useColorModeValue("warmGray.50", "coolGray.800")}>
      <Center
        w="100%"
        h="100%"
      >
        <Text>MovieListScreen</Text>
      </Center>
    </Box>
  )
}

export default MovieListScreen;