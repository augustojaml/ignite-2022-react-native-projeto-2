import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background700};
  `}
`;

export const Body = styled.View`
  flex: 1;
  padding: 24px;
  padding-bottom: 0;
  align-items: center;
`;
