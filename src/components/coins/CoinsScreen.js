import React, {useState,useEffect} from 'react'
import {View, Text, Pressable} from 'react-native'
import Http from '../libs/http';


const CoinsScreen = (props) => {

    const API = "https://api.coinlore.net/api/tickers/"

    const [data, setData] = useState({});
    
    const getData = async () => {
        let response = await Http.instance.get(API)
        setData(response);
    }
    
    useEffect(() => {
        getData()
    },[])
        
    handlePress = () => {
        props.navigation.navigate('CoinsDetail');
        console.log(props)
    }

    return (
        <View>
            <Text>Funciona</Text>
            <Pressable onPress = {handlePress}><Text>Go to details</Text></Pressable>
        </View>
    )
}

export default CoinsScreen
