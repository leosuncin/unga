import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
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

const GameScreen: React.FC<GameScreenProps> = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 99, props.userChoice),
  );

  return (
    <View style={styles.container}>
      <Text>Opponent's Guess</Text>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{currentGuess}</Text>
      </View>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => {}} />
        <Button title="GREATER" onPress={() => {}} />
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
