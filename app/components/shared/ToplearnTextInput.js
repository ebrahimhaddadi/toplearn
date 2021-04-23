import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-ionicons'
const ToplearnTextInput = ({icon,...otherProps}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.text} {...otherProps}/>
            {icon && (
                <Icon name={icon} size={20} color="#6e6969" style={styles.icon}/>
            )}
        </View>
    )
}

export default ToplearnTextInput

const styles = StyleSheet.create({
    container:{
        backgroundColor:"lightgray",
        borderRadius:15,
        flexDirection:"row",
        width:"90%",
        marginVertical:10,
        padding:2
    },
    icon:{
        marginLeft:1,
        alignSelf:"center",
    },
    text:{
        fontFamily:"byekan",
        fontSize:18,
        color:"#0c0c0c",
        textAlign:"center",
        width:"90%"
    }
})
