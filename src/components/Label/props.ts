import { theme } from '@global/styles/theme';
import { GestureResponderEvent, TouchableOpacityProps } from 'react-native';

export interface ParagraphProps extends TouchableOpacityProps {
  size?: keyof typeof theme.size;
  family?: keyof typeof theme.font;
  color?: keyof typeof theme.colors;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  lineHeight?: number;
  title?: string;
  background?: string;
  numberOfLines?: number;
  textAlign?: 'center' | 'justify' | 'left' | 'right';
  onPress?: (event: GestureResponderEvent) => void | undefined;
}
