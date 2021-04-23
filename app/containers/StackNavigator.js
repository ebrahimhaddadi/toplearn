import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import {WellcomeScreen,LoginScreen,RegisterScreen, CourseDetailsScreen,} from '../screens'
import TabsNavigator from './TabsNavigator'
const Stack=createStackNavigator()
const StackNavigator = () => {
    
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
               <Stack.Screen name="Wellcom" component={WellcomeScreen}/>
               <Stack.Screen name="Login" component={LoginScreen}
                   initialParams={{successRegister:false}}
               />
               <Stack.Screen name="Register" component={RegisterScreen}/>
               <Stack.Screen name="Home" component={TabsNavigator}/>
               <Stack.Screen name="CourseDetals" component={CourseDetailsScreen}/>
           </Stack.Navigator>
    )
}

export default StackNavigator


