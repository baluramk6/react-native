import React, {PropsWithChildren, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import diceOne from '../assets/dice-six-faces-one.png';
import diceTwo from '../assets/dice-six-faces-two.png';
import diceThree from '../assets/dice-six-faces-three.png';
import diceFour from '../assets/dice-six-faces-four.png';
import diceFive from '../assets/dice-six-faces-five.png';
import diceSix from '../assets/dice-six-faces-six.png';

type diceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: diceProps): JSX.Element => {
  return <Image style={styles.image} source={imageUrl} />;
};

export default function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(diceOne);

  const rollDiceOnTape = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(diceOne);
        break;
      case 2:
        setDiceImage(diceTwo);
      case 1:
        setDiceImage(diceOne);
        break;
      case 3:
        setDiceImage(diceThree);
        break;
      case 4:
        setDiceImage(diceFour);
        break;
      case 5:
        setDiceImage(diceFive);
        break;
      case 6:
        setDiceImage(diceSix);
        break;
      default:
        setDiceImage(diceOne);
        break;
    }
    ReactNativeHapticFeedback.trigger('notificationSuccess', options);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Dice imageUrl={diceImage} />
      </View>

      <Pressable onPress={rollDiceOnTape}>
        <Text style={styles.btn}>Press Me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 50,
  },
  imageWrapper: {},
  btn: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
});
