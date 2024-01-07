import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Photography</Text>
          <Text style={styles.cardLabel}>Rajasthan, Jaipur</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            libero. In, consequuntur! Expedita, aperiam fugit!
          </Text>
          <Text style={styles.cardFooter}>11 min away</Text>
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
  card: {
    width: 330,
    height: 340,
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 6,
  },
  cardElevated: {
    backgroundColor: 'yellow',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 6,
  },
  cardTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: 'black',
    fontSize: 18,
    marginBottom: 6,
  },
  cardDescription: {color: 'grey', fontSize: 14, marginBottom: 6},
  cardFooter: {
    color: 'grey',
  },
});
