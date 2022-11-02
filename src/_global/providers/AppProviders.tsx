import { theme } from '@global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { AppProvidersProps } from './props';

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <View style={{ flex: 1, backgroundColor: theme.colors.background700 }}>{children}</View>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
