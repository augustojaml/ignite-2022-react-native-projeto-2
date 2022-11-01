import { useTheme } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator } from 'react-native';

import * as S from './styles';

export function Loading() {
  const theme = useTheme();
  return (
    <>
      <S.Container>
        <ActivityIndicator color={theme.colors.primary} size="small" />
      </S.Container>
    </>
  );
}
