import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, CarsList, CarItem, StyledButton} from '../../components';
const HomeScreen = () => {
  return (
    <View>
      <Header />
      <CarsList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
