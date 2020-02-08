import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

const CategoryMealScreen: React.FC<NavigationScreenProps> = props => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('MealDetail')}
      />
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealScreen;
