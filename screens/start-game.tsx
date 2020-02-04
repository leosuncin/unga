import React, { useState } from 'react';
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Alert,
} from 'react-native';

import Card from '../components/card';
import { ACCENT_COLOR, PRIMARY_COLOR } from '../constants/colors';

type StartGameScreenProps = {
  onGameStart: CallableFunction;
};

const StartGameScreen: React.FC<StartGameScreenProps> = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number>();

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue, 10);
    if (Number.isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: () => setEnteredValue(''),
          },
        ],
      );
    } else {
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setEnteredValue('');
      Keyboard.dismiss();
      props.onGameStart(selectedNumber);
    }
  };

  return (
    <TouchableWithoutFeedback
      accessibilityRole="none"
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Start a new game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <TextInput
            keyboardType="number-pad"
            autoCorrect={false}
            blurOnSubmit
            maxLength={2}
            style={styles.input}
            value={enteredValue}
            onChangeText={text => setEnteredValue(text.replace(/\D+/g, ''))}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={() => setEnteredValue('')}
                color={ACCENT_COLOR}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={PRIMARY_COLOR}
              />
            </View>
          </View>
        </Card>
        {confirmed && (
          <Card style={styles.summaryContainer}>
            <Text>You selected</Text>
            <View style={styles.numberContainer}>
              <Text style={styles.number}>{selectedNumber}</Text>
            </View>
            <Button title="START GAME" onPress={() => {}} />
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    height: 30,
    width: '50%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: '46%',
  },
  summaryContainer: {
    marginTop: 20,
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
});

export default StartGameScreen;
