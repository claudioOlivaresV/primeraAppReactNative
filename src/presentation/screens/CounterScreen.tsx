import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

export const CounterScreen = () => {
  const [count, setCount] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count} </Text>
      <Pressable
        style={styles.button}
        onLongPress={() => setCount(0)}
        onPress={() => {
          setCount(count + 1);
        }}>
        <Text style={{color: 'white'}}>Incrementar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
  button: {
    backgroundColor: '#5856D6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    color: 'white',
  },
});
