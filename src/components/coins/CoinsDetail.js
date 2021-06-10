import React, {useEffect,useState} from 'react'
import {View, Text, Image, StyleSheet,ActivityIndicator} from 'react-native'

var ICON_ROUTE_PATH = 'https://c1.coinlore.com/img/25x25/'

const CoinsDetail = ({route,navigation}) => {
    
    const { coin: { symbol, name } } = route.params
    
    useEffect(() => {
        navigation.setOptions({title : symbol})
    }, [])


    const getSymbolIcon = () => {
        if(name){
            const symbol = name.toLowerCase().replace(' ', '-');
            return `${ICON_ROUTE_PATH}${symbol}.png`
        }
    }

    
    return (
        
        <View>
            <View style = {styles.row}>
            {/* {loading ? <ActivityIndicator color = '#000'  size = 'large' style = {styles.loader} /> : null} */}
                <Image style = {styles.img} source = {{uri : getSymbolIcon()}}/>
                <Text>{name}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    img: {
        width: 26,
        height: 26,
    },
    row: {
        flexDirection: 'row'
    }
})

export default CoinsDetail
