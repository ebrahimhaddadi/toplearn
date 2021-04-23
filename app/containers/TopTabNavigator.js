import React, { useEffect, useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { CoursesScreen,TopCoursesScreen,NewCousesScreen } from '../screens'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import ToplearnContext from '../context/ToplearnContext'
import { fetchCourses } from '../api/courses'
import Screen from '../components/shared/Screen'
import Toast from 'react-native-tiny-toast'
import { loadingToast } from '../utils/toast';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../redux/actions/index';
const TopTab=createMaterialTopTabNavigator()

const TopTabNavigator = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
   try {
    const fetchData=async()=>{
        loadingToast("درحال بارگذاری...")
    
        dispatch(getCourses())

        Toast.hide() 
    }   
     fetchData() 
   } catch (error) {
       console.log(error)
       Toast.hide() 
   } 
    },[])
    return (
      
        <Screen>
<TopTab.Navigator
        initialRouteName="AllCourses"
        backBehavior="none"
       screenOptions={{
           tabBarActiveTintColor:"tomato",
           tabBarInactiveTintColor:"gray",
          tabBarLabelStyle:{
              fontSize:RFPercentage(2.2),
              fontFamily:"ih"
          },
          tabBarStyle:{
              backgroundColor:"#f8f4f4"
          }

       }}
       >
           <TopTab.Screen name="AllCourses" component={CoursesScreen}
               options={{tabBarLabel:"همه دوره ها"}}
           />
           <TopTab.Screen name="NewCourses" component={NewCousesScreen}
                  options={{tabBarLabel:"دوره های جدید"}}
           />
           <TopTab.Screen name="TopCourses" component={TopCoursesScreen}
                  options={{tabBarLabel:"دوره های محبوب"}}
           />
       </TopTab.Navigator>
      
       </Screen>
       
       
    )
}

export default TopTabNavigator
