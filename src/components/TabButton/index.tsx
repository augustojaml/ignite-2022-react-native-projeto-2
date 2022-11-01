import { Text } from '@global/styles/components';
import React from 'react';
import { Props } from './props';

import { Container } from './styles';

export function TabButton({ title = 'TabButton', active, borderColor, marginLeft, ...rest }: Props) {
  return (
    <>
      <Container active={active} borderColor={borderColor} marginLeft={marginLeft} {...rest}>
        <Text color="gray100" size="small">
          {title}
        </Text>
      </Container>
    </>
  );
}
