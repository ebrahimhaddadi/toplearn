import React,{useState,useEffect, useContext} from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator} from 'react-native'
import Card from '../components/shared/Card';
import Screen from '../components/shared/Screen'
import axios from "axios";
import { fetchCourses } from '../api';
import ToplearnContext from '../context/ToplearnContext';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { decodeToken } from '../utils/jwt';
import { useSelector } from 'react-redux';




const CoursesScreen = ({navigation}) => {
    const courses = useSelector(state => state.courses)
   console.log(courses,"useSelector")
const context = useContext(ToplearnContext)

 useEffect(() => {
     
   const myFunc=async()=>{
       const token= await AsyncStorage.getItem("token");
       console.log(decodeToken(token)) 
   }
   myFunc()
 }, [])

    return (
        <Screen style={styles.container}>
       
            <FlatList
                data={courses}
                keyExtractor={(course)=>course._id.toString()}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate("CourseDetals",{course:item})}>
                       <Card
                       title={item.title}
                       image={item.imageUrl}
                       teacher="یونس قربانی"
                       time="15:00:00"
                       price={item.price}
                       info={item.info}
                       />
                    </TouchableOpacity>
                  
                )}
            />
        </Screen>
    )
}

export default CoursesScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#f8f4f4",
        padding:20
    }
})
