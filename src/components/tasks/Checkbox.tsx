import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { updateDoneState } from "../../controllers/taskController";

interface CheckboxProps {
  previousState: boolean;
  taskId: number;
}

const Checkbox = (props: CheckboxProps) => {
  const { previousState, taskId } = props;
  const [isChecked, setIsChecked] = useState(previousState);

  const handleToggle = () => {
    updateDoneState(taskId);
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={handleToggle}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.checkbox,
          isChecked ? styles.checkboxChecked : styles.checkboxUnchecked,
        ]}
      >
        {isChecked && <Text style={styles.checkmark}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "green",
    borderColor: "green",
  },
  checkboxUnchecked: {
    backgroundColor: "transparent",
  },
  checkmark: {
    color: "white",
    fontSize: 16,
  },
  label: {
    fontSize: 16,
  },
});

export default Checkbox;
