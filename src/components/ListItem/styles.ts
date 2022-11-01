import styled, { css } from 'styled-components/native';

interface ContainerProps {
  height?: number;
  paddingRight?: number;
  background?: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ theme, height, background }) => css`
    width: 100%;
    background-color: ${background || theme.colors.background500};
    padding: 16px;
    border-radius: 6px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: ${height || 56}px;
    overflow: hidden;
  `}
`;

export const ButtonIcon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
