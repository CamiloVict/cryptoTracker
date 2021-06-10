import React from 'react'
import {View,Text,StyleSheet, Image, Platform, Pressable} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
const CoinsItem = ({item, onPress}) => {

    const getImage = () => {
        if(item.percent_change_1h > 0){
            return require('../../assets/arrow_up.png')
        }else {
            return require('../../assets/arrow_down.png')
        }
    }

    return (
        <Pressable style = {styles.container} onPress = {onPress}>
            <View style = {styles.row}>
                <Text style= {styles.symbolText}> {item.name} </Text>
                <Text style= {styles.nameText}> {item.symbol} </Text>
                <Text style= {styles.priceText}> {`$${item.price_usd}`} </Text>
            </View>

            <View style={styles.row}>
                <Text style = {styles.percentText}>{item.percent_change_1h}</Text>
                <Image style = {styles.image}
                    source = {getImage()}
                />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'space-between',
        borderBottomColor: Colors.zircon,
        borderBottomWidth: 1,
        marginLeft: Platform.OS === 'ios' ? 16 : 0,
    },
    row: {flexDirection: 'row'},
    symbolText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 10
    },
    priceText: {
        color: '#fff',
        fontSize: 14,
        marginRight: 10
    },
    nameText: {
        color: '#fff',
        fontSize: 14
    },
    percentText:{
        color: '#fff',
        fontSize: 12,
        
    },
    image: {
        marginLeft:6,
        height: 18,
        width: 18
    }
})

export default CoinsItem
