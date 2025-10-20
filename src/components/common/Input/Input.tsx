import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import React from 'react';
import { colors } from '@/theme/colors';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

const Input = ({ label, error, ...rest }: InputProps) => {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        accessibilityLabel={label}
        placeholderTextColor={colors.grayNeutral}
        style={[styles.input, !!error && styles.inputError]}
        {...rest}
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: { 
    width: '100%',
    position: 'relative',
    marginVertical: 4,
  },
  label: {
    position: 'absolute',
    top: 8,
    left: 16,
    color: colors.border,
    zIndex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 8,
    backgroundColor: colors.neutral,
    fontSize: 16,
  },
  inputError: { 
    borderColor: colors.redRimac 
  },
  error: { 
    marginTop: 6, 
    color: colors.redRimac 
  },
});
