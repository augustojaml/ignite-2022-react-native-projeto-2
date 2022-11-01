import { Text } from '@global/styles/components';
import React from 'react';
import { UsersThree, X } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { Props } from './props';

import { ButtonIcon, Container } from './styles';

export function ListItem({
  icon: Icon = UsersThree,
  title = 'List Item',
  titleSize = 'p',
  titleColor,
  height,
  iconSize = 24,
  iconColor,
  onPressIcon,
  onPress,
}: Props) {
  const theme = useTheme();
  return (
    <>
      <Container height={height} onPress={onPress} disabled={!onPress}>
        <Icon size={iconSize} weight="fill" color={iconColor || theme.colors.gray200} />
        <Text marginLeft={16} size={titleSize} style={{ color: titleColor || theme.colors.gray200, flex: 1 }}>
          {title}
        </Text>
        {onPressIcon && (
          <ButtonIcon onPress={onPressIcon}>
            <X size={24} weight="fill" color={theme.colors.red500} />
          </ButtonIcon>
        )}
      </Container>
    </>
  );
}
