import { Text } from '@global/styles/components';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Props } from './props';

import { Container } from './styles';

export function Button({ title = 'Button', isLoading = false, background, ...rest }: Props) {
  const theme = useTheme();
  return (
    <>
      <Container {...rest} background={background}>
        {isLoading ? <ActivityIndicator size={20} color={theme.colors.gray100} /> : <Text>{title}</Text>}
      </Container>
    </>
  );
}
