import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { THEME } from '../../theme';

export interface TaskProps {
  id: string;
  task: string;
  state: boolean;
  changeState: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function Task({ id, task, state, changeState, deleteTask }: TaskProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={[!state ? styles.button : styles.checkedButton]}
          onPress={() => changeState(id)}
        >
          {state && (
            <Feather name='check' size={12} color={THEME.COLORS.GRAY_100} />
          )}
        </TouchableOpacity>
        <Text style={[styles.textTask, state && styles.checkedText]}>
          {task}
        </Text>
      </View>
      <TouchableOpacity onPress={() => deleteTask(id)}>
        <Feather
          style={styles.icon}
          name='trash-2'
          size={18}
          color={THEME.COLORS.GRAY_300}
        />
      </TouchableOpacity>
    </View>
  );
}
