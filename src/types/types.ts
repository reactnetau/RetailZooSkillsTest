import {RouteProp} from '@react-navigation/native';
//Seems to be a new types file error, npm install @types/@react-navigation/native-stack didnt seem to work
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackNavigatorParamList = {
  HomeScreen: undefined;
  DetailsScreen: {person: string};
  MenuScreen: undefined;
};

export type HomeStackNavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamList,
  'HomeScreen'
>;

export type DetailsRouteProp = RouteProp<
  RootStackNavigatorParamList,
  keyof RootStackNavigatorParamList
>;
