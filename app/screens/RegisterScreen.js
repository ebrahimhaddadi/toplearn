import {Formik} from 'formik';
import * as Yup from 'yup';
import React,{useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, TextInput, ToastAndroid, View} from 'react-native';
import {SubmitButton,ToplearnForm,ToplearnFormField} from "../components/form"
import Screen from '../components/shared/Screen';
import { registerUser } from '../api/user';
import Toast from 'react-native-tiny-toast'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { customToast, loadingToast } from '../utils/toast';
const validationSchema = Yup.object().shape({
  fullname: Yup.string().required('نام ونام خانوادگی الزامی می باشد'),
  email: Yup.string()
    .required('این فیلد الزامی می باشد')
    .email('ایمیل معتبر نمی باشد'),
  password: Yup.string()
    .required('این فیلد الزام می باشد')
    .min(4, 'کلمه عبور نباید کمتر از 4 کاراکتر باشد'),
  passwordConfirmation: Yup.string()
    .required('تکرار رمز عبور الزامی می باشد')
    .oneOf([Yup.ref('password'), null], 'کلمه عبور باید یکسان باشد'),
});

const RegisterScreen = ({navigation}) => {
  const handleUserRegistertion=async(user)=>{
    try {
      loadingToast("درحال ثبت نام کاربر...")
      
      const status=await registerUser(user)
      Toast.hide()
     if( status===201){
       navigation.navigate("Login",{successRegister:true}) 
      }else{
        Toast.hide()
        customToast("خطایی رخ داده است")
      }
    } catch (error) {
      console.log(error)
      Toast.hide()
    }
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/img/logo.png')} />
      <ToplearnForm
        initialValues={{
          fullname: '',
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        onSubmit={(user) =>{
          handleUserRegistertion(user)
           console.log(user)}}
        validationSchema={validationSchema}>
        
            <ToplearnFormField
              // placeholder="ایمیل کاربری"
              // autoCompleteType="email"
              // autoCorrect={false}
              // keyboardType="email-address"
              // style={styles.textinput}
              // placeholderTextColor="royalblue"
              // onChangeText={handleChange("emial")}
              // onBlur={()=>setFieldTouched("email")}
              name="fullname"
              placeholder="نام و نام خانوادگی"
              autoCorrect={false}
              icon="contact"
              placeholderTextColor="royalblue"
            />

            <ToplearnFormField
              placeholder="ایمیل کاربری"
              autoCompleteType="email"
              autoCorrect={false}
              keyboardType="email-address"
              icon="mail"
              placeholderTextColor="royalblue"
              name="email"
            />

            <ToplearnFormField
              placeholder="کلمه عبور"
              autoCorrect={false}
              secureTextEntry
              icon="lock"
              placeholderTextColor="royalblue"
              name="password"
            />

            <ToplearnFormField
              placeholder="تکرار کلمه عبور"
              autoCorrect={false}
              secureTextEntry
              icon="lock"
              placeholderTextColor="royalblue"
              name="passwordConfirmation"
            />

            <View style={{width: '60%'}}>
              <SubmitButton title="ثبت نام"/>
            </View>
      </ToplearnForm>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 150,
    marginTop: 10,
    marginBottom: 5,
  },
});
