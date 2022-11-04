import { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { THEME } from '../../theme';

interface InputProps {
  addTask: (task: string) => void;
}

export function Input({ addTask }: InputProps) {
  const [task, setTask] = useState('');

  function handleAddTask() {
    addTask(task);
    setTask('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={task}
        onChangeText={setTask}
        placeholder='Adicione uma nova tarefa'
        style={styles.input}
        placeholderTextColor={THEME.COLORS.GRAY_300}
      />

      <TouchableOpacity
        style={styles.addButton}
        activeOpacity={0.8}
        onPress={() => handleAddTask()}
      >
        <AntDesign name='pluscircleo' size={18} color={THEME.COLORS.GRAY_100} />
      </TouchableOpacity>
    </View>
  );
}
