import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackActions } from '@react-navigation/routers'
import React, { useEffect, useState } from 'react'
import { Image,  StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import MyIcon from '../components/shared/Icon'
import ItemSeparitor from '../components/shared/ItemSeparitor'
import Screen from '../components/shared/Screen'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const AccountScreen = ({navigation}) => {
const user = useSelector(state => state.user)

const handleLogOut=async()=>{
    await AsyncStorage.removeItem("token")
    await AsyncStorage.removeItem("userId")
    navigation.dispatch(StackActions.replace("Wellcom"))
}



const [getImage, setImage] = useState(null);

useEffect(() => {
    const loadingImage = async () => {
        const imageUri = await AsyncStorage.getItem("Image");
        if (imageUri !== null) {
            setImage(imageUri);
        }
    };
    loadingImage();
}, []);

const pickImage = async () => {
    let res = await launchCamera({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    },(res)=>{
        console.log(res.uri)
        setImage(res.uri);
    });

    // console.log(res.res,"iugiggy");

    if (res==!null) {
        await AsyncStorage.setItem("Image", res.uri);
        setImage(res.uri);
    }
};

    return (
        <Screen style={styles.screen}>
          <View style={styles.container}>
         <TouchableOpacity onPress={pickImage}>
                    {getImage ? (
                        <Image
                            source={{ uri: getImage }}
                            style={styles.image}
                        />
                    ) : (
                        <Image
                            style={styles.image}
                            source={require("../assets/img/favicon.png")}
                        />
                    )}
                </TouchableOpacity>
         
              <View style={styles.details} >
                  <Text style={styles.title}>{user.fullname}</Text>
                  <Text style={styles.subTitle}>{user.email}</Text>
              </View>
              <TouchableOpacity style={{alignSelf:"center",marginLeft:15}}>
<MyIcon name="settings" backgroundColor="tomato" />
              </TouchableOpacity>
          </View>
          <ItemSeparitor height={3}/>
          <TouchableHighlight underlayColor="#f8f4f4" onPress={handleLogOut} >
          <View style={styles.container}>
          <MyIcon name="log-out" backgroundColor="tomato" />
              <View style={styles.details} >
                  <Text style={styles.title}>خروج از حساب کاربری</Text>
              </View>
          </View>
         
          </TouchableHighlight>
        </Screen>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginVertical:15,
        padding:15
    },
    screen:{
        backgroundColor:"#f8f4f4"
    },
    image:{
        width:100,
        height:100,
        borderRadius:50
    },
    details:{
        marginLeft:10,
        justifyContent:"center"
    },
    title:{
        fontFamily:"ih",
        fontSize:20
    },
    subTitle:{
        color:"#6e6969"
    }
})
