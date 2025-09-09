import React from 'react';
import {Pressable, Text, Platform, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

interface Props {
  label: string;
  onLongPress?: () => void;
  onPress?: () => void;
}

export const PrimaryButton = ({label, onPress, onLongPress}: Props) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
      color: 'white',
    },
    buttonPressed: {
      backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
    },
  });
  return (
    <Button
      mode="contained"
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}>
      <Text>{label}</Text>
    </Button>
  );
};
