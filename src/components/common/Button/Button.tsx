import React from "react";
import { Pressable, Text, TextStyle, ViewStyle } from "react-native";
import { styles } from "./Button.styles";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button = ({ title, onPress, disabled, style, textStyle } : ButtonProps) => (
  <Pressable
    accessibilityRole="button"
    onPress={onPress}
    disabled={disabled}
    style={[styles.btn, disabled && styles.disabled, style]}
  >
    <Text style={[styles.text, textStyle]}>{title}</Text>
  </Pressable>
);

export default Button;
