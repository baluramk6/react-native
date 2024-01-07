import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard(): JSX.Element {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://www.orientsoftware.com/Themes/OrientSoftwareTheme/Content/Images/blog/2021-12-16/what-can-you-do-with-javascript.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sit
            magni aliquid deserunt omnis dolores necessitatibus. Asperiores,
            esse natus illum nesciunt molestias vero quibusdam maiores odit
            magnam ducimus, deserunt dicta, quidem pariatur.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.jackfranklin.co.uk/blog/')}>
            <Text style={styles.socialLink}>Read More...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.instagram.com/baluramk6/')}>
            <Text style={styles.socialLink}>Follow Me</Text>
          </TouchableOpacity>
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
    height: 360,
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 6,
  },
  elevatedCard: {
    backgroundColor: 'pink',
    borderRadius: 6,
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'grey',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardImage: {
    height: 200,
    width: '100%',
  },
  bodyContainer: {
    padding: 8,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  socialLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    backgroundColor: 'white',
    padding: 8,
    shadowColor: 'black',
    borderRadius: 6,
  },
});
