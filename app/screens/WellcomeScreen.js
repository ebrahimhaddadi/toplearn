import React,{useEffect} from 'react'
import NetInfo from "@react-native-community/netinfo";
import { StyleSheet, Text, View,Button, ImageBackground, Image, BackHandler, Alert } from 'react-native'
import CustomButton from '../components/shared/CustomButton'
import ToplearnText from '../components/shared/ToplearnText'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { decodeToken } from '../utils/jwt';
import {StackActions,useNavigationState} from "@react-navigation/native"
import { customToast } from '../utils/toast';
import { useDispatch } from 'react-redux';
import { userAction } from '../redux/actions';

const WellcomeScreen = ({navigation}) => {
const dispatch = useDispatch()

const screenIndex = useNavigationState((state) => state.index);
useEffect(() => {
    let currentCount = 0;
    console.log(screenIndex);

    if (screenIndex <= 0) {
        BackHandler.addEventListener("hardwareBackPress", () => {
            if (currentCount === 1) {
                BackHandler.exitApp();
                return true;
            }

            currentCount += 1;
            customToast("برای خروج دوباره دکمه برگشت را لمس بنمایید");

            setTimeout(() => {
                currentCount = 0;
            },100);

            return true;
        });
    }
}, []);

useEffect(() => {
    const  checkLogin=async()=>{
      const token=await AsyncStorage.getItem("token")
      if(token===! null){
        navigation.reset({
          index:0,
          routes:[{name:"Home"}]
        })
      }
    }
   
  }, [])
    const confirmationAleart=()=>{
        return Alert.alert(
            "ارتباط با سرور",
            `برای استفاده از اپلیکیشن باید به اینترنت متصل باشی`,
        [
           
            {
                text:"باشه",
                onPress:BackHandler.exitApp,
            }
        ],{cancelable:false}
        )
    }

    useEffect(() => {
        const cheackForNet= async()=>{
            const state=await NetInfo.fetch();
            if(!state.isConnected){confirmationAleart()}else{
                const token=await AsyncStorage.getItem("token");
                const userId=JSON.parse(await AsyncStorage.getItem("userId"))
                if(token !==null && userId !==null){
                    const decodedToken=decodeToken(token)
                    dispatch(userAction(decodedToken.user));
                    if(decodeToken.user.userId===userId){
                        navigation.dispatch(StackActions.replace("Home"))
                    }else{
                        await AsyncStorage.removeItem("token")
                        await AsyncStorage.removeItem("userId")
                        navigation.navigate("Login")
                    }
                }
            }

        }
        cheackForNet()
    }, [])
    return (
       <ImageBackground 
       style={styles.background}
       source={require("../assets/img/bg1.jpg")}
       blurRadius={2}
       >
       <View style={styles.logoContainer}>
           <Image source={require("../assets/img/logo.png")}
               style={styles.logo}
           />
           <ToplearnText fontFamily="ih" size="3" styles={styles.firstText}>
               خود آموزی ،کسب تجربه ،ورود به بازار کار
           </ToplearnText>
       </View>
           <View style={styles.buttonContainer}>
               <CustomButton color="royalblue" onPress={()=>navigation.navigate("Login") } title="ورود" />
               <CustomButton onPress={()=>navigation.navigate("Register")} title="ثبت نام" />
           </View>
       </ImageBackground>
    )
}

export default WellcomeScreen

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    buttonContainer:{
        width:"100%",
        padding:20
    },
    firstText:{
        color:"tomato",
        top:10
    },
    logo:{
        width:200,
        height:150
    },
    logoContainer:{
        position:"absolute",
        top:10,
        alignItems:"center"
    }
})
