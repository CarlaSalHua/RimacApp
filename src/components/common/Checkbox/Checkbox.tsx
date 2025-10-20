import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './Checkbox.styles';
import { CheckboxIcon } from '@/assets/icons';

interface CheckboxProps {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}
const Checkbox = ({ checked, onChange, label }: CheckboxProps) => (
  <View style={styles.container}>
    <Pressable
      accessibilityRole="checkbox"
      onPress={() => onChange(!checked)}
      style={styles.row}
    >
      {checked ? <CheckboxIcon width={20} height={20} /> : <View style={styles.box} />}
    </Pressable>
    <Text style={styles.text}>{label}</Text>
  </View>
);

export default Checkbox;
