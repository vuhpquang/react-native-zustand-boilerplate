import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const CellBlock = ({ isDark = false, pathShown = false, hasPiece = null }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.container,
        isDark && styles.dark,
        pathShown && hasPiece && styles.hasPiece,
        pathShown && styles.pathShown,
      ]}>
      {hasPiece && (
        <Image
          source={hasPiece ? require('../../assets/images/pieces/' + hasPiece + '.png') : null}
        />
      )}
    </TouchableOpacity>
  );
};

export default CellBlock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(122, 184, 222)',
  },
  dark: {
    backgroundColor: 'rgb(93, 93, 93)',
  },
  hasPiece: {
    backgroundColor: 'rgb(225, 136, 133)',
  },
  pathShown: {
    backgroundColor: 'rgb(153, 223, 191)',
  },
});
