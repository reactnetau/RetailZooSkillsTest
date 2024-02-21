import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface IItem {
  item: {
    name: string;
  };
}
const MenuItem = ({item}: IItem) => {
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
  },
});

export default MenuItem;
