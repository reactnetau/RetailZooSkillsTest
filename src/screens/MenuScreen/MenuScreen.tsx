import {
  ImageBackground,
  StyleSheet,
  Pressable,
  Image,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProp} from '../../types/types';
import rick from '../../assets/images/rick.png';
import morty from '../../assets/images/morty.png';
import logo from '../../assets/images/logo.png';

const MenuScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  return (
    <ImageBackground
      source={require('../../assets/images/menubg.jpg')}
      style={styles.image}
      resizeMode="cover">
      <Image source={logo} style={styles.logo} />
      <Pressable>
        <View style={styles.rickContainer}>
          <Image source={rick} style={styles.rick} />
          <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={[styles.button, {marginRight: 70}]}
            onPress={() =>
              navigation.navigate('DetailsScreen', {person: 'Rick'})
            }>
            <Text style={styles.btnText}>Rick</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mortyContainer}>
          <Image source={morty} style={styles.morty} />
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('DetailsScreen', {person: 'Morty'})
            }>
            <Text style={styles.btnText}>Morty</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
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
  rickContainer: {
    position: 'absolute',
    marginLeft: -150,
  },
  rick: {
    aspectRatio: 1,
    height: '70%',
    resizeMode: 'contain',
  },
  mortyContainer: {
    position: 'absolute',

    marginLeft: 0,
    marginTop: 15,
  },
  morty: {
    aspectRatio: 1,
    height: '80%',
    resizeMode: 'contain',
  },
  button: {
    margin: 10,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'lightblue', // Default button color
    alignSelf: 'center',
    zIndex: 100,
  },
  btnText: {
    color: 'black',
  },
  logo: {
    marginTop: -370,
    marginBottom: 50,
    width: '100%',
    height: '50%',
    resizeMode: 'stretch',
  },
});

export default MenuScreen;
