import 'react-native-gesture-handler';
import  React,{useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager, StyleSheet, Text, View } from 'react-native'
import StackNavigator from './containers/StackNavigator';
import AnimatedSplash from "react-native-animated-splash-screen";
import Screen from './components/shared/Screen';
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);





const App = () => {
  const [isloading, setisloading] = useState(false)
useEffect(()=>{
  setTimeout(()=>{
setisloading(true)
  },2000)
},[])




    return (
      <AnimatedSplash
      isLoaded={isloading}
      logoImage={require("../app/assets/img/logo.png")}
      backgroundColor={"#262626"}
      logoHeight={100}
      logoWidth={100}
    >
        <NavigationContainer>
        <Screen>
          <StackNavigator/>
          </Screen>
        </NavigationContainer>
        </AnimatedSplash>
    )
}

export default App

const styles = StyleSheet.create({})
