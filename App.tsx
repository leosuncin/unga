import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header';
import StartGameScreen from './screens/start-game';
import GameScreen from './screens/game';

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  return (
    <View style={styles.container}>
      <Header title="Guess a number" />
      {userNumber ? (
        <GameScreen userChoice={userNumber} />
      ) : (
        <StartGameScreen onGameStart={setUserNumber} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
