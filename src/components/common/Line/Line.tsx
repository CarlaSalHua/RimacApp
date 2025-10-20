import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { colors } from '@/theme/colors';

interface LineProps {
  style?:  StyleProp<ViewStyle>;
  color?: string;
}

const Line = ({ style, color }: LineProps) => {
  return (
    <View
      style={[
        styles.line,
        { backgroundColor: color || colors.grayForte },
        style,
      ]}
    />
  );
};

export default Line;

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: 1,
    marginVertical: 24,
  },
});
