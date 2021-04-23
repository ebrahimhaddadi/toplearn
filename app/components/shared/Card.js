import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import {numberWithCommas} from "../../utils/price"
import ToplearnText from './ToplearnText'
const Card = ({title,price,teacher,time,image,courseInfo=null}) => {
    return (
        <View style={styles.card}>
        <Image resizeMode="contain" source={{
            uri:`https://rnapi.ghorbany.dev/${image}`
        }} style={styles.courseImage}/>
        <View style={{padding:20}}>
            <ToplearnText fontFamily="ih" size="2.2" styles={styles.title}>{title}</ToplearnText>
            <View style={styles.cousrseDetails}>
                <ToplearnText fontFamily="byekan" size="2.2" styles={styles.price}>قیمت دوره {price===0 ? "رایگان" : `:${numberWithCommas(price)} تومان  `}</ToplearnText>
                <ToplearnText fontFamily="byekan" size="2.2" styles={styles.time}>زمان دوره:{time}</ToplearnText>
            </View>
            <View style={styles.userContainer}>
              <ToplearnText fontFamily="ih" size="3"  styles={styles.teacher}>مدرس دوره:{teacher}</ToplearnText>
            </View>
        </View>
        {
            courseInfo ? (
            <View style={{flex:1}}>
                <ToplearnText fontFamily="ih" size="2">
                    توضیحات دوره:
                </ToplearnText>
                <ScrollView>
                    <ToplearnText fontFamily="ih" size="2.8" styles={styles.courseInformation} >
                        {courseInfo}
                    </ToplearnText>
                </ScrollView>
            </View>
            ) : null
        }
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card:{
        flex:1,
        borderRadius:15,
        backgroundColor:"#fff",
        marginBottom:15,
        
    },
    courseImage:{
        width:330,
        marginVertical:20,
        height:250
    },
    container:{
        flexDirection:"row",
        marginVertical:20,
        padding:15
    },
    cousrseDetails:{

        flexDirection:"row",
        justifyContent:"space-between"
    },
    userContainer:{
        marginVertical:10,
    },
    title:{
        marginVertical:7,
        alignSelf:"center"
    },
    time:{
      
    },
    price:{
    
    }, 
    teacher:{
        alignSelf:"center"
    },
    courseInformation:{
        textAlign:"justify",
        marginVertical:10,
        lineHeight:25
    }
})
