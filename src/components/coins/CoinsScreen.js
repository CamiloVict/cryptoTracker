import React, {useState,useEffect} from 'react'
import {View, FlatList,ActivityIndicator,StyleSheet} from 'react-native'
import Http from '../../libs/http';
import Colors from '../../res/Colors'

import CoinsItem from './CoinsItem'
import CoinsSearch from './CoinsSearch';

const CoinsScreen = (props) => {

    const API = "https://api.coinlore.net/api/tickers/"

    const [coins, setCoins] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const getCoins = async () => {
        try{
            const response = await Http.instance.get(API)
            setCoins(response.data)
            setLoading(false)
        }catch(err){
            console.log(err)
            throw Error(err)
        }
    }
    
    useEffect(() => {
        getCoins()
    },[])
        
    const handlePress = (coin) => {
        props.navigation.navigate('CoinsDetailScreen', {coin});
    }

    
    const filterCoinsByQuery = (coinList, query) => {
        if(!query) return coinList;
        return  coinList.filter((coin) => {
            return coin.name.toLowerCase().includes(query.toLowerCase())
             || coin.symbol.toLowerCase().includes(query.toLowerCase())
        })
    };

    return (
        <View style = {styles.container}>

            <CoinsSearch  onChange = {(value)=> setQuery(value)}/>

            {loading && <ActivityIndicator color = '#000'  size = 'large' style = {styles.loader} />}
            <FlatList 
                data = {filterCoinsByQuery(coins, query)} 
                keyExtractor={(item) => item.id}
                renderItem = {( { item } ) => <CoinsItem item = {item} onPress = {() => {handlePress(item)}}/>} 
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
    
})


export default CoinsScreen
