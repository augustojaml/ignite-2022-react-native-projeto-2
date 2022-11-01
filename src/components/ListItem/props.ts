import { FC } from 'react';
import { GestureResponderEvent, TouchableOpacityProps } from 'react-native';
import { IconProps } from 'phosphor-react-native';
import { theme } from '@global/styles/theme';

export interface Props extends TouchableOpacityProps {
  icon?: FC<IconProps>;
  title?: string;
  titleSize?: keyof typeof theme.size;
  titleColor?: string;
  height?: number;
  iconSize?: number;
  iconColor?: string;
  background?: string;
  onPressIcon?: (event: GestureResponderEvent) => void;
  onPress?: (event: GestureResponderEvent) => void;
}
