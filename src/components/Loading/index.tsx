import { useTheme } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Props } from './props';

import * as S from './styles';

export function Loading({ marginTop = 0 }: Props) {
  const theme = useTheme();
  return (
    <>
      <S.Container>
        <ActivityIndicator style={{ marginTop }} color={theme.colors.primary} size="small" />
      </S.Container>
    </>
  );
}
