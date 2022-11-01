import { theme } from '@global/styles/theme';
import { TouchableOpacityProps } from 'react-native';

export interface Props extends TouchableOpacityProps {
  title?: string;
  isLoading?: boolean;
  background?: keyof typeof theme.colors;
}
