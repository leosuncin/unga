import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Header from './components/header';
import StartGameScreen from './screens/start-game';
import GameScreen from './screens/game';

function fetchFonts() {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [loading, setLoading] = useState(true);

  return loading ? (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setLoading(false)}
      onError={console.error}
    />
  ) : (
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
