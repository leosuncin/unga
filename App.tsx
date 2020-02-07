import React, { useState } from 'react';
import { loadAsync } from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './navigation/MealsNavigator';

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
    <MealsNavigator />
  );
}
