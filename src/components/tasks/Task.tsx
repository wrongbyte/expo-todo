import { StyleSheet, Text, View } from "react-native";
import Checkbox from "./Checkbox";
import { BinSvg } from "./BinSvg";
import { setTasksFn } from "../../types/tasks";

interface ITaskProps {
  id: number;
  title: string;
  done: boolean;
  setTasks: setTasksFn
}

export const Task = (props: ITaskProps) => {
  const { id, title, done, setTasks } = props;
  return (
    <View style={styles.container}>
      <Checkbox previousState={done} taskId={id} />
      <Text style={styles.text}>{title}</Text>
      <BinSvg taskId={id} setTasks={setTasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  container: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "flex-start",
    marginBottom: 15,
    marginRight: 30,
  },
});
