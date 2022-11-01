import { View } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(View)`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.background700};
    padding: 24px;
    padding-top: 8px;
    position: absolute;
    bottom: 0;
  `}
`;
