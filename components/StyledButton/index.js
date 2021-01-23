import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Styles from './styles';

const StyledButton = (props) => {
  const {type, content, car} = props;

  const navigation = useNavigation();

  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

  return (
    <View style={Styles.container}>
      <Pressable
        style={[Styles.button, {backgroundColor: backgroundColor}]}
        onPress={() =>
          navigation.navigate('Details', {
            car,
          })
        }>
        <Text style={[Styles.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
