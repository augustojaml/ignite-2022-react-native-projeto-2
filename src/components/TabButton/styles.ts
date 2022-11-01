import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ContainerProps extends TouchableOpacityProps {
  borderColor?: string;
  active?: boolean;
  marginLeft?: number;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  ${({ theme, borderColor, active, marginLeft }) => css`
    background-color: ${'transparent'};
    padding: 6px;
    padding-bottom: 8px;
    align-self: flex-start;
    border-color: ${borderColor || (active ? theme.colors.green500 : 'transparent')};
    border-width: 1px;
    border-radius: 6px;
    margin-left: ${marginLeft || 0}px;
  `}
`;
