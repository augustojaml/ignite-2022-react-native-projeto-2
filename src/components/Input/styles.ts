import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 56px;
    background-color: ${theme.colors.background900};
    padding-left: 24px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    overflow: hidden;
  `}
`;

export const ButtonIcon = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
`;
