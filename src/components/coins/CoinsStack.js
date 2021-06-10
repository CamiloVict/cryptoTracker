import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import CoinsScreen from './CoinsScreen'
import CoinsDetail from './CoinsDetail'


const Stack = createStackNavigator();

const CoinsStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name = 'Coins' component = {CoinsScreen} />
            <Stack.Screen name = 'CoinsDetail' component = {CoinsDetail} />
        </Stack.Navigator>
    )
}

export default CoinsStack
