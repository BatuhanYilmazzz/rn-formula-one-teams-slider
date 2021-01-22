import React from 'react';
import {FlatList, View} from 'react-native';
import Styles from './styles';
import {cars, SIZES} from '../../contants';
import CarItem from '../CarItem';
const CarsList = () => {
  return (
    <View style={Styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} key={item.id} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={SIZES.height}
      />
    </View>
  );
};

export default CarsList;
