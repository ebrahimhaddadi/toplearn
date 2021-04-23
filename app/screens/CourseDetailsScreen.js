import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import Card from '../components/shared/Card';
import Screen from '../components/shared/Screen';

const CourseDetailsScreen = ({navigation,route}) => {
    if(!route.params.course) return null;

  

   navigation.setOptions({
       headerShown:true,
       title:route.params.course.title,
       headerTitleStyle:{
           fontFamily:"byekan",
           color:"#fff",
           fontSize:RFPercentage(2.5)
       },
       headerStyle:{
           backgroundColor:"tomato",
           
       }

   })
   const {_id,title,imageUrl,info}=route.params.course

    return (
        <Screen style={styles.container}>
          <Card
              title={title}
              price="3000000"
              image={imageUrl}
              teacher="یونس قربانی"
             courseInfo={info}
          />  
        </Screen>
    )
}

export default CourseDetailsScreen

const styles = StyleSheet.create({
    container:{
        marginHorizontal:5,
        backgroundColor:"#f8f4f4"
    }
})
