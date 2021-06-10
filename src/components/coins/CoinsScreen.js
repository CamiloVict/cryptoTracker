import React, {useState,useEffect} from 'react'
import {View, Text, Pressable, FlatList,ActivityIndicator,StyleSheet} from 'react-native'

import Http from '../../libs/http';
import Colors from '../../res/Colors'

import CoinsItem from './CoinsItem'

const CoinsScreen = (props) => {

    const API = "https://api.coinlore.net/api/tickers/"

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCoins = async () => {
        const response = await Http.instance.get(API)
        setCoins(response.data)
        setLoading(false)
    }
    
    useEffect(() => {
        getCoins()
    },[])
        
    handlePress = () => {
        props.navigation.navigate('CoinsDetail');
    }

    return (
        <View style = {styles.container}>
            <Pressable onPress = {() => {handlePress()}}>
                <Text>Button</Text>
            </Pressable>
            {loading ? <ActivityIndicator color = '#000'  size = 'large' style = {styles.loader} /> : null}
            <FlatList 
                data = {coins} 
                renderItem = {( { item } ) => <CoinsItem item = {item}/>} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flex: 1,
        backgroundColor: Colors.charade
    },
    loader: {
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list:{
    }
})


export default CoinsScreen
