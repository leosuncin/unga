import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';

import GoalInput from './components/goal-input';
import GoalItem from './components/goal-item';

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
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);
  const [isAddMode, setIsAddMode] = useState(false);

  function addGoalHandler(value) {
    setCourseGoals(previousGoals => [
      ...previousGoals,
      { value, id: hashCode(value) },
    ]);
    setIsAddMode(false);
  }
  function removeGoalHandler(id) {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id);
    });
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={() => setIsAddMode(false)}
      />
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
});
