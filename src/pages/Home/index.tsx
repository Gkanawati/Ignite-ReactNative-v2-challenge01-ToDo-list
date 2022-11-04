import { useState } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Text,
  FlatList,
} from 'react-native';
import { Counter } from '../../components/Counter';
import { EmptyList } from '../../components/EmptyList';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Task } from '../../components/Task';

import { styles } from './styles';

export interface TaskProps {
  id: string;
  task: string;
  state: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [countChecked, setCountChecked] = useState(0);

  console.log(tasks);

  function handleAddTask(task: string) {
    const TaskAdd = {
      id: String(new Date().getTime()),
      task,
      state: false,
    };

    setTasks((tasks) => [...tasks, TaskAdd]);

    console.log('clear');
  }

  console.log(countChecked);

  function handleChangeState(id: string) {
    const updatedTasks = tasks.map((task) => ({ ...task }));
    updatedTasks.map((item) => {
      if (item.id === id) {
        const taskDone = item;
        taskDone.state = !taskDone.state;
        if (item.state) {
          setCountChecked(countChecked + 1);
        } else {
          setCountChecked(countChecked - 1);
        }
      }
    });

    setTasks(updatedTasks);
  }

  function handleDeleteTask(id: string) {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Input addTask={(task) => handleAddTask(task)} />

        <View style={styles.countTasks}>
          <Counter title='Criadas' color='BLUE' counter={tasks.length} />
          <Counter title='Concluídas' color='PURPLE' counter={countChecked} />
        </View>

        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task
              id={item.id}
              task={item.task}
              state={item.state}
              changeState={(id) => handleChangeState(id)}
              deleteTask={(id) => handleDeleteTask(id)}
            />
          )}
          ListEmptyComponent={<EmptyList />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
