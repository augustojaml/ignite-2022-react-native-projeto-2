import { RefObject } from 'react';
import { GestureResponderEvent, TextInput, TextInputProps } from 'react-native';

export interface Props extends TextInputProps {
  inputRef?: RefObject<TextInput>;
  onPress?: (event: GestureResponderEvent) => void;
}
