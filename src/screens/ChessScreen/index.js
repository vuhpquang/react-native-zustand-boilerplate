import React from 'react';
import { StyleSheet, View } from 'react-native';
import ChessBoard from './ChessBoard';

const ChessScreen = () => {
  return (
    <View style={styles.container}>
      <ChessBoard />
    </View>
  );
};

export default ChessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
