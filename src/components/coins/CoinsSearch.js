import { color } from 'jimp'
import React, { useState } from 'react'

import { View,StyleSheet, TextInput, Platform} from 'react-native'

import Colors from '../../res/Colors'

const CoinsSearch = (props) => {

    const [query,setQuery] = useState('')
    
    const handleText = (query) => {
        setQuery(query)

        if(props.onChange){
            props.onChange(query)
        }
    }

    return (
        <View>
            <TextInput
            style = {[
                styles.textInput,
                Platform.OS === 'ios' ? styles.textInputIos : styles.textInputAndroid
            ]}
                onChangeText = {(query) => {handleText(query)}}
                value = {query}
                placeholder = 'Search Coin'
                placeholderTextColor = 'white'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 46,
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingLeft: 16,
        color: '#fff'
    },
    textInputAndroid: {
        borderWidth: 2,
        borderBottomColor: Colors.zircon
    },
    textInputIos:{
        margin: 8,
        borderRadius:8
    }
})

export default CoinsSearch
