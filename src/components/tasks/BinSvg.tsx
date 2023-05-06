import { TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { deleteTask, updateCurrentTasks } from '../../controllers/taskController';
import { setTasksFn } from '../../types/tasks';

interface BinSvgProps {
  taskId: number;
  setTasks: setTasksFn;
}

export const BinSvg = (props: BinSvgProps) => {
  const { taskId, setTasks } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        deleteTask(taskId).then((updatedTasks) => {
          setTasks(updatedTasks);
          updateCurrentTasks(updatedTasks);
        });
      }}>
      <Svg width="35" height="35" viewBox="0 0 24 24" fill="none">
        <Path
          d="M7.69231 8.70833H5V8.16667H9.84615M7.69231 8.70833V19H16.3077V8.70833M7.69231 8.70833H16.3077M16.3077 8.70833H19V8.16667H14.1538M9.84615 8.16667V6H14.1538V8.16667M9.84615 8.16667H14.1538"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path d="M10 11V17" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 11V17" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M14 11V17" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
      </Svg>
    </TouchableOpacity>
  );
};
