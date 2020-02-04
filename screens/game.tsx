import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { ACCENT_COLOR } from '../constants/colors';
import Card from '../components/card';

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number,
): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.round(Math.random() * (max - min)) + min;

  return exclude === randomNumber
    ? generateRandomBetween(min, max, exclude)
    : randomNumber;
}

type GameScreenProps = {
  userChoice: number;
};
enum Direction {
  lower = 'LOWER',
  greater = 'GREATER',
}

const GameScreen: React.FC<GameScreenProps> = props => {
  const low = useRef(1);
  const high = useRef(100);
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(low.current, high.current, props.userChoice),
  );
  useEffect(() => {
    if (props.userChoice === currentGuess) {
      Alert.alert('Game over');
    }
  });
  const nextGuessHandler = (direction: Direction) => () => {
    if (
      (direction === Direction.lower && currentGuess < props.userChoice) ||
      (direction === Direction.greater && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't Lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
    } else {
      if (direction === Direction.lower) {
        high.current = currentGuess;
      } else {
        low.current = currentGuess;
      }
      setCurrentGuess(guess =>
        generateRandomBetween(low.current, high.current, guess),
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text>Opponent's Guess</Text>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{currentGuess}</Text>
      </View>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={nextGuessHandler(Direction.lower)} />
        <Button title="GREATER" onPress={nextGuessHandler(Direction.greater)} />
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  numberContainer: {
    borderWidth: 2,
    borderColor: ACCENT_COLOR,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: ACCENT_COLOR,
    fontSize: 22,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});

export default GameScreen;
