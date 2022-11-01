import Feather from '@expo/vector-icons/Feather';
import React from 'react';

import LogoPng from '@global/assets/logo.png';
import { useTheme } from 'styled-components/native';
import { Container, IconButton, LogoImage } from './styles';
import { Props } from './props';

export function Header({ onPress }: Props) {
  const theme = useTheme();
  return (
    <>
      <Container justifyContent={onPress ? 'space-between' : 'center'}>
        {onPress && (
          <IconButton onPress={onPress}>
            <Feather name="chevron-left" size={24} color={theme.colors.main500} />
          </IconButton>
        )}
        <LogoImage source={LogoPng} />
      </Container>
    </>
  );
}
