import { GestureResponderEvent, TextInputProps } from 'react-native';

export interface Props extends TextInputProps {
  onPress?: (event: GestureResponderEvent) => void;
}
