import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>more..</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>and more</Text>
        </View>
      </ScrollView>
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
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: 'pink',
    // elevation: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'red',
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
});
