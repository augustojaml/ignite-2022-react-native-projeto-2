import { theme } from '@global/styles/theme';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ContainerProps extends TouchableOpacityProps {
  background?: keyof typeof theme.colors;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  ${({ background }) => css`
    width: 100%;
    background-color: ${theme.colors[background ?? 'green500']};
    padding: 16px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
  `}
`;
