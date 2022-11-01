import { TouchableOpacityProps } from 'react-native';

export interface Props extends TouchableOpacityProps {
  title?: string;
  active?: boolean;
  borderColor?: string;
  marginLeft?: number;
}
