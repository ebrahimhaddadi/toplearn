import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ItemSeparitor = ({height=1}) => {
    return <View style={[styles.separitor,{height}]}/>
}

export default ItemSeparitor

const styles = StyleSheet.create({
    separitor:{
        width:"100%",
        backgroundColor:"gray"
    }
})
