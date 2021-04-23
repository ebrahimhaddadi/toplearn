import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Icon from 'react-native-ionicons';
import {AccountScreen,CoursesScreen,MyCoursesScreen} from "../screens"
import TopTabNavigator from './TopTabNavigator';


const Tab =createBottomTabNavigator();


const TabsNavigator = () => {
    return (
        <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon:({focused,size,color})=>{
            let iconName;
            if(route.name==="Courses"){
                iconName= focused ? "videocam" : "school"
            }else if(route.name==="Account"){
                iconName = focused ? "person" : "happy"
            }else if(route.name==="MyCourses"){
                iconName="videocam"
            }
            return <Icon 
            color={color}
            size={size}
            name={iconName}/>
            }
        })}
        tabBarOptions={{
            activeTintColor:"tomato",
            labelStyle:{
                fontFamily:"ih",
                fontSize:13
            }
        }}
        >
        <Tab.Screen
        options={{
            tabBarLabel:"دوره ها",
            tabBarBadge:3
        }}
         name="Courses" component={TopTabNavigator}/>
        <Tab.Screen
        options={{
            tabBarLabel:"حساب کاربری"
        }}
         name="Account" component={AccountScreen}/>
        <Tab.Screen
        options={{
            tabBarLabel:"دوره های من"
        }}
         name="MyCourses" component={MyCoursesScreen}/>
    </Tab.Navigator>
    )
}

export default TabsNavigator
