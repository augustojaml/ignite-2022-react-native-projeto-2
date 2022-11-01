import { theme } from '@global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { AppProvidersProps } from './props';

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </>
  );
}
