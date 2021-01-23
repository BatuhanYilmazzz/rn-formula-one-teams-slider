import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import StyledButton from '../StyledButton';
import Styles from './styles';

const CarItem = (props) => {
  const {name, image} = props.car;
  return (
    <View style={Styles.carContainer}>
      <ImageBackground source={image} style={Styles.image} resizeMode="cover" />
      <View style={Styles.titles}>
        <Text style={Styles.title}>{name}</Text>
      </View>
      <View style={Styles.buttonsContainer}>
        <StyledButton type="primary" content={'See Details'} car={props.car} />
      </View>
    </View>
  );
};

export default CarItem;
