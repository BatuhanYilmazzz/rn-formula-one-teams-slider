import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import StyledButton from '../StyledButton';
import Styles from './styles';

const CarItem = (props) => {
  const {name, tagline, taglineCTA, image} = props.car;
  return (
    <View style={Styles.carContainer}>
      <ImageBackground source={image} style={Styles.image} />
      <View style={Styles.titles}>
        <Text style={Styles.title}>{name}</Text>
        <Text style={Styles.subtitle}>
          {tagline} <Text style={Styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={Styles.buttonsContainer}>
        <StyledButton type="primary" content={'Custom Order'} />
        <StyledButton type="secondary" content={'Existing Inventory'} />
      </View>
    </View>
  );
};

export default CarItem;
