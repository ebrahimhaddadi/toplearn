import React,{useContext, useEffect, useState} from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View, } from 'react-native'
import { useSelector } from 'react-redux';
import { fetchCourses } from '../api';
import Card from '../components/shared/Card';
import Screen from '../components/shared/Screen'
import ToplearnContext from '../context/ToplearnContext';



const NewCousesScreen = () => {
    
const courses = useSelector(state => state.courses)
    return (
        <Screen style={styles.container}>
            <FlatList
                data={courses}
                keyExtractor={(course)=>course._id.toString()}
                renderItem={({item})=>(
                   <Card
                       title={item.title}
                       image={item.imageUrl}
                       teacher="یونس قربانی"
                       time="15:00:00"
                       price={item.price}
                   />
                )}
            />
        </Screen>
    )
}

export default NewCousesScreen

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        backgroundColor:"#f8f4f4",
        padding:20
    }
})
