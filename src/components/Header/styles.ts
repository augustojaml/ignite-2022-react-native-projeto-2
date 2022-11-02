import { Image, TouchableOpacity, View } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ContainerPorps {
  justifyContent?: 'space-between' | 'center';
}

export const Container = styled(View)<ContainerPorps>`
  ${({ theme, justifyContent }) => css`
    width: 100%;
    background-color: ${theme.colors.background700};
    height: 90px;
    flex-direction: row;
    align-items: flex-end;
    justify-content: ${justifyContent || 'space-between'};
    padding: 24px;
    padding-bottom: 0;
  `}
`;

export const IconButton = styled(TouchableOpacity)`
  width: 55px;
  height: 55px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const LogoImage = styled(Image)`
  width: 46px;
  height: 55px;
`;
