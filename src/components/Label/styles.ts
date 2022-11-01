import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  background?: string;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  ${({ background }) => css`
    background-color: ${background || 'transparent'};
  `}
`;
