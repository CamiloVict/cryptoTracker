import React, {useEffect,useState} from 'react'
import {View, Text, Image, StyleSheet,SectionList, FlatList, ActivityIndicator} from 'react-native'
import Http from '../../libs/http'
import Colors from '../../res/Colors'
import CoinMarketItem from './CoinMarketItem';

var ICON_ROUTE_PATH = 'https://c1.coinlore.com/img/25x25/';

const CoinsDetailScreen = ({route,navigation}) => {
    
    const { coin: { symbol, name, market_cap_usd, volume24, percent_change_24h,id } } = route.params
    
    const [markets,setMarkets] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        navigation.setOptions({title : symbol})
        getMarkets(id)
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
    
    const getMarkets = async (coinId) => {
        try{
            const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`
            const markets = await  Http.instance.get(url)
            setMarkets(markets)
            setLoading(false)
        }catch(err){
            console.log(err)
            throw Error(err)
        }
    }


    return (
        
        <View style = {styles.container}>
            <View style = {styles.subHeader}>
                <Image style = {styles.img} source = {{uri : getSymbolIcon()}}/>
                <Text style = { styles.titleText}>{name}</Text>
            </View>
                <SectionList style = {styles.sectionList}
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

            <Text style = {styles.subTitle}>Markets</Text>
            {loading && <ActivityIndicator color = '#000'  size = 'large' style = {styles.loader}/>}
            <FlatList 
                horizontal = {true}
                data = {markets}
                renderItem = {({item}) => <CoinMarketItem item = {item}/>}
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
    sectionList:{
        maxHeight: 220,
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
    },
    subTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 10,
        marginBottom: 2,
        marginLeft: 8,
    },
    loader: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CoinsDetailScreen
