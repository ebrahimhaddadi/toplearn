import React from 'react'
import { View, Text } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const ToplearnText = ({size,fontFamily,children,styles,color="#000"}) => {
    return (
            <Text style={[{fontFamily,fontSize:RFPercentage(size),color},styles]} >{children}</Text>
    )
}

export default ToplearnText
