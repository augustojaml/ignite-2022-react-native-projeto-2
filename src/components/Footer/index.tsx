import React from 'react';
import { Props } from './props';

import { Container } from './styles';

export function Footer({ children }: Props) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}
