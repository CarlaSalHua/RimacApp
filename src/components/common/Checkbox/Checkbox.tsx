import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./Checkbox.styles";

interface CheckboxProps {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}
const Checkbox = ({ checked, onChange, label }: CheckboxProps) => (
  <Pressable
    accessibilityRole="checkbox"
    onPress={() => onChange(!checked)}
    style={styles.row}
  >
    <View style={[styles.box, checked && styles.boxChecked]} />
    <Text style={styles.text}>{label}</Text>
  </Pressable>
);

export default Checkbox;
