import { DefaultInput } from '@global/styles/components';
import React from 'react';
import { useTheme } from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';

import { ButtonIcon, Container } from './styles';
import { Props } from './props';

export function Input({ onPress, inputRef, ...rest }: Props) {
  const theme = useTheme();
  return (
    <>
      <Container>
        <DefaultInput
          ref={inputRef}
          placeholderTextColor={theme.colors.gray700}
          style={{ flex: 1, height: '100%', paddingRight: onPress ? 0 : 24, color: theme.colors.gray100 }}
          {...rest}
        />
        {onPress && (
          <ButtonIcon onPress={onPress}>
            <Feather name="plus" size={24} color={theme.colors.green500} />
          </ButtonIcon>
        )}
      </Container>
    </>
  );
}
