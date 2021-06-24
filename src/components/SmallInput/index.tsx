// libraries
import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

// js
import { styles } from './styles';

// components

export function SmallInput({ ...rest }: TextInputProps) {
  return (
    <TextInput style={styles.container} {...rest} keyboardType='numeric' />
  );
}
