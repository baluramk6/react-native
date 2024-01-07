import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyVard from './components/FancyCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

function App(): JSX.Element {
  const list = new Array(6).fill('hello');

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {},
});
