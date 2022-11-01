import 'react-native-gesture-handler';

import { AppProviders } from '@global/providers/AppProviders';
import { Main } from '@routes/Main';
import React from 'react';

import * as SplashScreen from 'expo-splash-screen';

import {
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_700Bold,
  useFonts,
} from '@expo-google-fonts/josefin-sans';

import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';

export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_700Bold,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_900Black,
  });

  SplashScreen.preventAutoHideAsync();

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <>
      <AppProviders>
        <Main />
      </AppProviders>
    </>
  );
}
