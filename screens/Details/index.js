import React from 'react';
import {Text, View} from 'react-native';

const DetailsScreen = ({route}) => {
  let {car} = route.params;
  return (
    <View>
      <Text>{car.name}</Text>
    </View>
  );
};

export default DetailsScreen;
