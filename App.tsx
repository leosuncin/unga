import React, { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function hashCode(str: string): string {
  let hash = Date.now();
  if (str.length === 0) {
    return '0';
  }
  for (let i = 0; i < str.length; i++) {
    const chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr; // eslint-disable-line no-bitwise
    // Convert to 32bit integer
    hash |= 0; // eslint-disable-line no-bitwise
  }
  return Math.abs(hash)
    .toString(16)
    .substring(0, 6);
}

type Goal = {
  id: string;
  value: string;
};

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          defaultValue={enteredGoal}
          onChangeText={text => setEnteredGoal(text)}
        />
        <Button
          title="Add"
          onPress={() => {
            setCourseGoals(previousGoals => [
              ...previousGoals,
              { value: enteredGoal, id: hashCode(enteredGoal) },
            ]);
            setEnteredGoal('');
          }}
        />
      </View>
      <FlatList
        data={courseGoals}
        renderItem={({ item }) => <Text>{item.value}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    marginVertical: 5,
    flex: 2,
  },
});
