import React from 'react';
import {Image, View} from 'react-native';
import Styles from './styles';
import {images} from '../../contants';
const Header = () => {
  return (
    <View style={Styles.container}>
      <Image style={Styles.logo} source={images.logo} />
      <Image style={Styles.menu} source={images.menu} />
    </View>
  );
};

export default Header;
