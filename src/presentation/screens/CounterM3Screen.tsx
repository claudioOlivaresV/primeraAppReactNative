import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {globalStyle} from '../theme/global.style';
import {FAB} from 'react-native-paper';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(10);
  return (
    <View style={globalStyle.centerContainer}>
      <Text style={globalStyle.title}>{count}</Text>
      <FAB
        style={globalStyle.fab}
        small
        icon="add-outline"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
    </View>
  );
};
