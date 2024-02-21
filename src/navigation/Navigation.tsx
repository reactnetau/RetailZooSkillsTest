import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import {RootStackNavigatorParamList} from '../types/types';
import MenuScreen from '../screens/MenuScreen';

const Stack = createStackNavigator<RootStackNavigatorParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{headerTitle: '', headerBackTitle: 'Home'}}
        />

        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{headerTitle: 'Character', headerBackTitle: 'Menu'}}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
