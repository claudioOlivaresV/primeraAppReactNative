import React from 'react';
import {Text} from 'react-native';
import {Button} from 'react-native-paper';

interface Props {
  label: string;
  onLongPress?: () => void;
  onPress?: () => void;
}

export const PrimaryButton = ({label, onPress, onLongPress}: Props) => {
  return (
    <Button
      mode="contained"
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}>
      <Text>{label}</Text>
    </Button>
  );
};
