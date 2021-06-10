import React, {useEffect,useState} from 'react'
import {View, Text, Image, StyleSheet,SectionList} from 'react-native'

import Colors from '../../res/Colors'

var ICON_ROUTE_PATH = 'https://c1.coinlore.com/img/25x25/'

const CoinsDetail = ({route,navigation}) => {
    
    const { coin: { symbol, name, market_cap_usd, volume24, percent_change_24h } } = route.params
    
    useEffect(() => {
        navigation.setOptions({title : symbol})
    }, [])


    const getSymbolIcon = () => {
        if(name){
            const symbol = name.toLowerCase().replace(' ', '-');
            return `${ICON_ROUTE_PATH}${symbol}.png`
        }
    }

    const getSection = () => {
        const sections = [
            {
                title : 'Market Cap',
                data : [market_cap_usd] 
            },
            {
                title: 'Volume 24h',
                data: [volume24]
            },
            {
                title: 'Change24h',
                data : [percent_change_24h]
            }
        ]
        return sections
    }
    
    return (
        
        <View style = {styles.container}>
            <View style = {styles.subHeader}>
            {/* {loading ? <ActivityIndicator color = '#000'  size = 'large' style = {styles.loader} /> : null} */}
                <Image style = {styles.img} source = {{uri : getSymbolIcon()}}/>
                <Text style = { styles.titleText}>{name}</Text>
            </View>
                <SectionList 
                    sections = { getSection() }
                    keyExtractor = { (item) => item.id}
                    renderItem = {({item}) => 
                    <View style = { styles.sectionItem}>
                        <Text style = {styles.itemText} >{item}</Text>
                    </View>}
                    renderSectionHeader = {({section}) => 
                        <View style = {styles.sectionHeader}>
                            <Text style = {styles.sectionText}>{section.title}</Text> 
                        </View>}
                />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.charade,
    },
    subHeader: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        padding:16,
        flexDirection: 'row',
        
    },
    sectionHeader: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 8
    },
    sectionItem:{
        padding:8
    },
    img: {
        width: 26,
        height: 26,
        marginRight:20
    },
    titleText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 10,
        marginTop: 2
    },
    itemText:{
        color: '#fff',
        fontSize: 14,
    },
    sectionText: {
        color: '#fff',
        fontSize:14,
        fontWeight: 'bold',
    }
})

export default CoinsDetail
