import React from "react";
import { Pressable, Text, ViewStyle } from "react-native";
import { styles } from "./Button.styles";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
}

const Button= ({ title, onPress, disabled, style } : ButtonProps) => (
  <Pressable
    accessibilityRole="button"
    onPress={onPress}
    disabled={disabled}
    style={[styles.btn, disabled && styles.disabled, style]}
  >
    <Text style={styles.text}>{title}</Text>
  </Pressable>
);

export default Button;
