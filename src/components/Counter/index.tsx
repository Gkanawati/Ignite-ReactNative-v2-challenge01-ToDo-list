import React from 'react';
import { View, Text } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

interface CounterProps {
  title: string;
  counter: number;
  color: 'BLUE' | 'PURPLE';
}

export function Counter({ title, color, counter }: CounterProps) {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          color === 'BLUE'
            ? { color: THEME.COLORS.BLUE }
            : { color: THEME.COLORS.PURPLE },
        ]}
      >
        {title}
      </Text>
      <Text style={styles.counter}>{counter}</Text>
    </View>
  );
}
