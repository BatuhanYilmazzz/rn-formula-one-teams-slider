/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {DetailsScreen, HomeScreen} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
import {fetchHome} from './store/actions';

const Stack = createStackNavigator();

const App = () => {
  const {loading} = useSelector((state) => state.homeReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHome());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
