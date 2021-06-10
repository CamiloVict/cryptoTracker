import React from 'react';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack'


import CoinsScreen from './CoinsScreen'
import CoinsDetail from './CoinsDetail'


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
            <Stack.Screen name = 'CoinsDetail' component = {CoinsDetail} />
        </Stack.Navigator>
    )
}




export default CoinsStack
