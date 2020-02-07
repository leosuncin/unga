import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

const CategoriesScreen: React.FC<NavigationScreenProps> = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button
        title="Go to Meals!"
        onPress={() =>
          props.navigation.navigate({ routeName: 'CategoryMeals' })
        }
      />
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

export default CategoriesScreen;
