import { GestureResponderEvent, TouchableOpacityProps } from 'react-native';

export interface Props extends TouchableOpacityProps {
  onPress?: (event: GestureResponderEvent) => void | undefined;
}
