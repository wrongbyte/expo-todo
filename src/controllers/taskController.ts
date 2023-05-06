import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITask } from "../types/tasks";

export const getCurrentTasks = async () => {
  try {
    const tasks = await AsyncStorage.getItem("currentTasks");
    if (!tasks) {
    return []
    }
    return JSON.parse(tasks);
  } catch (e) {
    console.log(e);
  }
};

export const updateCurrentTasks = async (tasks: ITask[]) => {
  const parsedTasks = JSON.stringify(tasks);
  await AsyncStorage.setItem("currentTasks", parsedTasks);
};

export const addTask = async (message: string) => {
  const tasks = await getCurrentTasks();
  const lastId = tasks[tasks.length - 1]?.id || 0;
  const id = lastId + 1;
  const newTask = {
    id,
    title: message,
    userId: 1,
    done: false,
  };
  tasks.push(newTask);
  const parsedTasks = JSON.stringify(tasks);
  await AsyncStorage.setItem("currentTasks", parsedTasks);
  return tasks;
};

export const updateDoneState = async (taskId: number) => {
  const tasks = await getCurrentTasks();
  const task = tasks.find((task: ITask) => task.id === taskId);
  task.done = !task.done;
  updateCurrentTasks(tasks);
};

export const deleteTask = async (taskId: number) => {
  const tasks = await getCurrentTasks();
  const newTasks = tasks.filter((task: ITask) => task.id !== taskId);
  return newTasks;
};
