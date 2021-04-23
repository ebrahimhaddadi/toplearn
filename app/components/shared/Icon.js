import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-ionicons';
const MyIcon = ({size=40,backgroundColor="#000",name,iconColor="#fff"}) => {
    return (
        <View style={{width: size,height:size,borderRadius:size/2,name,backgroundColor,justifyContent:"center",alignItems:"center"}}>
           <Icon name={name} size={size} color={iconColor} />
        </View>
    )
}

export default MyIcon
