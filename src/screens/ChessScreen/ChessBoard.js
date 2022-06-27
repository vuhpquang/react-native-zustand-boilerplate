import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CellBlock from './CellBlock';

const ChessBoard = () => {
  return (
    <View>
      <Text>ChessBoard</Text>
      <CellBlock />
    </View>
  );
};

export default ChessBoard;

const styles = StyleSheet.create({});
