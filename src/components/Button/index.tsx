// libraries
import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text } from 'react-native';

// js
import { styles } from './styles';

interface Props extends RectButtonProps {
  title: string;
}

export function Button(props: Props) {
  const { title, ...rest } = props;

  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
