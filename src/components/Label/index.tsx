import { Text } from '@global/styles/components';
import React from 'react';
import { ParagraphProps } from './props';

import { Container } from './styles';

export function Label({
  size,
  family,
  color,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  lineHeight,
  textAlign,
  title = 'Paragraph',
  background,
  numberOfLines,
  onPress,
}: ParagraphProps) {
  return (
    <>
      <Container background={background} onPress={onPress} disabled={!onPress}>
        <Text
          size={size}
          family={family}
          color={color}
          marginTop={marginTop}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          marginRight={marginRight}
          lineHeight={lineHeight}
          numberOfLines={numberOfLines}
          textAlign={textAlign}
        >
          {title}
        </Text>
      </Container>
    </>
  );
}
