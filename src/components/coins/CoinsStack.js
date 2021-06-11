import React from 'react';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack'


import CoinsScreen from './CoinsScreen'
import CoinsDetailScreen from '../coinDetail/CoinsDetailScreen';
import Colors from '../../res/Colors'

const Stack = createStackNavigator();

const CoinsStack = () => {

    return (
        <Stack.Navigator screenOptions = {
            {
                headerStyle: {
                    backgroundColor: Colors.blackPearl,
                    shadowOpacity: 0,
                },
                headerTintColor:Colors.white
            }
        }>
            <Stack.Screen name = 'Coins' component = {CoinsScreen} />
            <Stack.Screen name = 'CoinsDetailScreen' component = {CoinsDetailScreen} />
        </Stack.Navigator>
    )
}




export default CoinsStack
