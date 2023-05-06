import { StyleSheet, TextInput, Button, Text, View } from "react-native";
import { TaskList } from "../components/tasks/TaskList";

import {
  getCurrentTasks,
  updateCurrentTasks,
  addTask,
} from "../controllers/taskController";
import { useEffect, useState } from "react";
import { ITask } from "../types/tasks";

export default function TaskListPage() {
  let [tasks, setTasks] = useState<ITask[]>([]);
  let [newTask, setNewTask] = useState<string>("");
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getCurrentTasks();
        const initialTasks =
          fetchedTasks.length == 0 ? [] : fetchedTasks;
        setTasks(initialTasks);
      } catch (e) {
        console.log(e);
      }
    };
    fetchTasks();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de tarefas</Text>
      <View style={styles.separator} />
      <TaskList setTasks={setTasks} tasks={tasks} />
      <View style={styles.submitRow}>
        <TextInput
          onChange={(event) => {
            let text = event.nativeEvent.text;
            setNewTask(text);
          }}
          onSubmitEditing={(event) => {
            addTask(event.nativeEvent.text).then((updatedTasks) => {
              setTasks(updatedTasks);
              updateCurrentTasks(updatedTasks);
            });
          }}
          style={styles.input}
          placeholder="Digite uma tarefa"
        />
        <Button
          onPress={() => {
            addTask(newTask).then((updatedTasks) => {
              setTasks(updatedTasks);
              updateCurrentTasks(updatedTasks);
            });
          }}
          title="Adicionar"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "15%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  submitRow: {
    flexDirection: "row",
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
    fontSize: 20,
    width: "60%",
  },
});
