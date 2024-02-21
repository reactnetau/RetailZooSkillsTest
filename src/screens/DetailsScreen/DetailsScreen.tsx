import {
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {useQuery} from '@apollo/client';
import {CHARACTER_QUERY} from '../../queries/queries';
import MenuItem from '../../components/MenuItem';
import {DetailsRouteProp} from '../../types/types';

const DetailsScreen = () => {
  const route = useRoute<DetailsRouteProp>();
  const person = route?.params?.person;

  const {data, loading, error} = useQuery(CHARACTER_QUERY, {
    variables: {name: person},
  });

  if (loading) {
    return (
      <View style={styles.activity}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return <Text>There was an error!</Text>;
  }
  return (
    <>
      <Text style={styles.text}>Episodes {person} appeared in!</Text>
      <FlatList
        data={data.characters.results}
        renderItem={({item}) => <MenuItem item={item} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'green',
    fontSize: 20,
    padding: 10,
  },
  activity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
