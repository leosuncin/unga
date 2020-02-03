import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header';
import StartGameScreen from './screens/start-game';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
