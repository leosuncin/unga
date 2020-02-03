import React, { useState } from 'react';
import {
  Button,
  Modal,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

type GoalInputProps = {
  visible: boolean;
  onAddGoal: (value: string) => void;
  onCancel: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
};

const GoalInput: React.FC<GoalInputProps> = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={setEnteredGoal}
          defaultValue={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
