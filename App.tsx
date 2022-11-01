import 'react-native-gesture-handler';

import { AppProviders } from '@global/providers/AppProviders';
import { Main } from '@routes/Main';
import React from 'react';

import {
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_700Bold,
  useFonts,
} from '@expo-google-fonts/josefin-sans';

import { Loading } from '@components/Loading';
import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';
import { StatusBar } from 'react-native';

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

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <AppProviders>{fontsLoaded ? <Main /> : <Loading />}</AppProviders>
    </>
  );
}
