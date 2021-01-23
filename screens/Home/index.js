import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, CarsList} from '../../components';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
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
