import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import Card from '../components/card';
import { ACCENT_COLOR, PRIMARY_COLOR } from '../constants/colors';

const StartGameScreen = () => {
  return (
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
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={ACCENT_COLOR} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={PRIMARY_COLOR} />
          </View>
        </View>
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
});

export default StartGameScreen;
