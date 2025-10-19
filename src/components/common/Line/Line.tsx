import { StyleSheet, View } from 'react-native';
import React from 'react';
import { colors } from '@/theme/colors';

const Line = () => {
  return <View style={styles.line} />;
};

export default Line;

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: 1,
    backgroundColor: colors.grayForte,
    marginVertical: 24,
  },
});
