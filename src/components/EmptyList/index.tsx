import { Label } from '@components/Label';
import React from 'react';
import { Props } from './props';

import { Container } from './styles';

export function EmptyList({ title = 'Empty List' }: Props) {
  return (
    <>
      <Container>
        <Label size="h5" title={title} textAlign="center" color="gray400" />
      </Container>
    </>
  );
}
