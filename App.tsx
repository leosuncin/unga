import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { loadAsync } from 'expo-font';
import { AppLoading } from 'expo';

function loadResources() {
  return loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <AppLoading
      startAsync={loadResources}
      onFinish={() => setLoading(false)}
      onError={console.error}
    />
  ) : (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
