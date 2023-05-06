import { View } from 'react-native';
import { Task } from './Task';
import { ITask, setTasksFn } from '../../types/tasks';

export interface ITaskListProps {
  tasks: ITask[];
  setTasks: setTasksFn;
}

export const TaskList = (props: ITaskListProps) => {
  const { tasks, setTasks } = props;
  return (
    <View>
      {tasks.map((task) => {
        return (
          <Task
            id={task.id}
            title={task.title}
            done={task.done}
            key={task.id}
            setTasks={setTasks}
          />
        );
      })}
    </View>
  );
};
