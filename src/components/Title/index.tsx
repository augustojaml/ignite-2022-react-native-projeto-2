import { Label } from '@components/Label';
import React from 'react';
import { Props } from './props';

import { Container } from './styles';

export function Title({ title = 'Title', subtitle = 'Subtitle' }: Props) {
  return (
    <>
      <Container>
        <Label size="h3" title={title} />
        <Label color="gray400" title={subtitle} />
      </Container>
    </>
  );
}
