import React from 'react'
import { StyleSheet,  TouchableOpacity, View, } from 'react-native'
import ToplearnText from './ToplearnText'

const CustomButton = ({title,onPress,color="tomato"}) => {
    return (
       <TouchableOpacity 
       style={[styles.button,{backgroundColor:color}]}
        onPress={onPress}>
           <ToplearnText size="3" fontFamily="ih" styles={styles.text}>{title}</ToplearnText>
       </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
backgroundColor:"tomato",
   width:"100%",
   padding:15,
   justifyContent:"center",
   alignItems:"center",
   marginVertical:5,
   borderRadius:10
    },
    text:{
color:"#fff",
    }
})
