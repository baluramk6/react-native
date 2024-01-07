import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.redCard]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.blueCard]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.greenCard]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.yellowCard]}>
          <Text>Yellow</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    borderWidth: 2,
    borderColor: 'red',
  },
  card: {
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 8,
  },
  redCard: {
    backgroundColor: 'red',
  },
  blueCard: {
    backgroundColor: 'blue',
  },
  greenCard: {
    backgroundColor: 'green',
  },
  yellowCard: {
    backgroundColor: 'yellow',
  },
});
