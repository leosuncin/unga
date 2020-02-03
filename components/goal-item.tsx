import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type GoalItemProps = {
  onDelete: CallableFunction;
  id: string;
  title: string;
};

const GoalItem: React.FC<GoalItemProps> = props => {
  return (
    <TouchableOpacity
      accessibilityRole="text"
      onPress={() => props.onDelete(props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
