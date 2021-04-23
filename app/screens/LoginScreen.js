import {Formik} from 'formik';
import * as Yup from 'yup';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {
  SubmitButton,
  ToplearnForm,
  ToplearnFormField,
} from '../components/form';
import Screen from '../components/shared/Screen';
import Toast from 'react-native-tiny-toast';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {customToast, loadingToast, successToast} from '../utils/toast';
import {loginUser} from '../api/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('این فیلد الزامی می باشد')
    .email('ایمیل معتبر نمی باشد'),
  password: Yup.string()
    .required('این فیلد الزام می باشد')
    .min(4, 'کلمه عبور نباید کمتر از 4 کاراکتر باشد'),
});

const LoginScreen = ({navigation, route}) => {
  useEffect(() => {
    if (route.params.successRegister) {
      successToast('ثبت نام موفقیت آمیز بود');
    }
  }, []);


  const handleUserLogin = async (user) => {
    try {
        loadingToast("در حال برقراری ارتباط ...");
        const status = await loginUser(user);
        if (status ===200) {
            Toast.hide();
            successToast("ورود موفقیت آمیز بود");
            // navigation.navigate("Home");
            navigation.reset({
              index:0,
              routes:[{name:"Home"}]
            })
        } else {
            Toast.hide();
            customToast("ایمیل کاربری یا کلمه عبور صحیح نمی باشد");
        }
    } catch (err) {
        Toast.hide();
        console.log(err);
    }
};

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/img/logo.png')} />
      <ToplearnForm
        initialValues={{email: '', password: ''}}
        onSubmit={(user) => {
          handleUserLogin(user);
        }}
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
          autoCompleteType="password"
          autoCorrect={false}
          secureTextEntry
          icon="lock"
          placeholderTextColor="royalblue"
          name="password"
        />

        <View style={{width: '60%'}}>
          <SubmitButton title="ورود" />
        </View>
      </ToplearnForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 270,
    height: 200,
    marginTop: 20,
    marginBottom: 40,
  },
});
