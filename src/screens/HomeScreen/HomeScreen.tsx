import {
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProp} from '../../types/types';

const HomeScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  return (
    <ImageBackground
      source={require('../../assets/images/rickandmorty.jpg')}
      style={styles.image}
      resizeMode="cover">
      <Text style={styles.overlayText}>Rick & Morty API</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MenuScreen')}>
        <Text style={styles.btnText}>Start</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: 'white', // or any color you want
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Background color with transparency
    padding: 10,
  },
  button: {
    margin: 10,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'lightblue', // Default button color
  },
  btnText: {
    color: 'black',
  },
});

export default HomeScreen;
