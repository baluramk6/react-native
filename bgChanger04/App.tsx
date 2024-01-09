import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, Button} from 'react-native';

export default function App() {
  const [color, setColor] = useState('white');

  return (
    <SafeAreaView
      onTouchStart={() => setColor('white')}
      style={[styles.container, {backgroundColor: color}]}>
      <View>
        <Text style={styles.heading}>Background Changer</Text>
      </View>
      <View style={styles.btnWrapper}>
        <Button
          title="Red"
          onPress={() => setColor('red')}
          color="red"
          touchSoundDisabled={true}
        />
        <Button title="Green" onPress={() => setColor('green')} color="green" />
        <Button title="Blue" onPress={() => setColor('blue')} color="blue" />
        <Button
          title="Yellow"
          onPress={() => setColor('yellow')}
          color="yellow"
        />
        <Button title="Brown" onPress={() => setColor('brown')} color="brown" />
        <Button title="Pink" onPress={() => setColor('pink')} color="pink" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  container: {
    width: '100%',
    height: '100%',
  },
  btnWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    columnGap: 15,
    borderWidth: 1,
    paddingVertical: 10,
    marginHorizontal: 'auto',
  },
  btn: {
    // width: 'auto',
    paddingHorizontal: 80,
    paddingVertical: 50,
    padding: 90,
    borderRadius: 19,
  },
});
